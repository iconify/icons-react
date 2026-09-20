import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3u9ab5j.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGgE5gcbVy" class="tb3u9ab5j"/></defs><g class="cuyn6tgcc"><use href="#SVGgE5gcbVy"/><use href="#SVGgE5gcbVy"/></g>`,
		"fallback": "radix-icons:drawing-pin-filled",
	});
}

export default Component;
