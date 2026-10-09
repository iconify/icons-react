import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6-botbkv.css';
import '../../css/i/iih2hu12r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6-botbkv"/><path class="iih2hu12r"/>`,
		"fallback": "energy-icons:hard-drive-20",
	});
}

export default Component;
