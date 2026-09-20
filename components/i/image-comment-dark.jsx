import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jne4o1brk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jne4o1brk"/>`,
		"fallback": "pajamas:image-comment-dark",
	});
}

export default Component;
