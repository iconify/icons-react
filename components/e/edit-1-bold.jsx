import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp5oynpvc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp5oynpvc"/>`,
		"fallback": "glyphs:edit-1-bold",
	});
}

export default Component;
