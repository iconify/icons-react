import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxnj49dbu.css';
import '../../css/p/pxuy9ccjx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxnj49dbu"/><path class="pxuy9ccjx"/>`,
		"fallback": "energy-icons:excavator-20-bold",
	});
}

export default Component;
