import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3s45tqe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-3s45tqe"/>`,
		"fallback": "glyphs:code-1-outline",
	});
}

export default Component;
