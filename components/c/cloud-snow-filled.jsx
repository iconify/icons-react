import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8je27bwj.css';
import '../../css/l/l0fa8jnxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n8je27bwj"/><path class="l0fa8jnxy"/></g>`,
		"fallback": "reicon:cloud-snow-filled",
	});
}

export default Component;
