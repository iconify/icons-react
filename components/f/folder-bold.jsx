import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig4iay83n.css';
import '../../css/v/vy5dyvnoo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ig4iay83n"/><path class="vy5dyvnoo"/></g>`,
		"fallback": "glyphs:folder-bold",
	});
}

export default Component;
