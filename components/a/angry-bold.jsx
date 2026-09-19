import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x12zc6b4o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x12zc6b4o"/>`,
		"fallback": "glyphs:angry-bold",
	});
}

export default Component;
