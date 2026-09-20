import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4p-jmuol.css';
import '../../css/w/w07nvcqye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y4p-jmuol"/><path class="w07nvcqye"/></g>`,
		"fallback": "reicon:buildings2-filled",
	});
}

export default Component;
