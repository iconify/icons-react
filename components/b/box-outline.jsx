import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2_h6rb6e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2_h6rb6e"/>`,
		"fallback": "glyphs:box-outline",
	});
}

export default Component;
