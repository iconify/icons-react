import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzf0e9b9a.css';
import '../../css/k/k4ii4twhf.css';
import '../../css/m/mew4ry_wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hzf0e9b9a"/><path clip-rule="evenodd" class="k4ii4twhf"/><path class="mew4ry_wk"/></g>`,
		"fallback": "flowbite:cash-solid",
	});
}

export default Component;
