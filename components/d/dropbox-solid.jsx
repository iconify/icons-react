import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsl56fbcy.css';
import '../../css/h/htwi_r-dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsl56fbcy"/><path class="htwi_r-dw"/></g>`,
		"fallback": "flowbite:dropbox-solid",
	});
}

export default Component;
