import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpn7eesli.css';
import '../../css/v/v_25zwbbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpn7eesli"/><path class="v_25zwbbj"/>`,
		"fallback": "energy-icons:battery-container-20",
	});
}

export default Component;
