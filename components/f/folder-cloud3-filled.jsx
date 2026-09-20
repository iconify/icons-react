import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh9nke0wt.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7q0qg3vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGsvPgGcfj" class="xh9nke0wt"/></defs><g class="cuyn6tgcc"><use href="#SVGsvPgGcfj"/><use href="#SVGsvPgGcfj"/><path class="v7q0qg3vo"/></g>`,
		"fallback": "reicon:folder-cloud3-filled",
	});
}

export default Component;
