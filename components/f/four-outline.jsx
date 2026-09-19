import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl_3njf8q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vl_3njf8q"/>`,
		"fallback": "glyphs:four-outline",
	});
}

export default Component;
