import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bejh_pbmo.css';
import '../../css/s/s5qakmbbz.css';
import '../../css/u/ux699tbwn.css';
import '../../css/v/v_7pz1b8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bejh_pbmo"/><path class="s5qakmbbz"/><path class="ux699tbwn"/><path class="v_7pz1b8z"/>`,
		"fallback": "energy-icons:geothermal-well-20",
	});
}

export default Component;
