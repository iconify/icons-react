import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xw-o2-_kb.css';
import '../../css/j/ju-zdhbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xw-o2-_kb"/><path class="ju-zdhbkf"/></g>`,
		"fallback": "flowbite:hammer-outline",
	});
}

export default Component;
