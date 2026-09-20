import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9lsp2bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9lsp2bwz"/>`,
		"fallback": "majesticons:image-in-picture-line",
	});
}

export default Component;
