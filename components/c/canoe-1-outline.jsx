import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz4cr8yeh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz4cr8yeh"/>`,
		"fallback": "glyphs:canoe-1-outline",
	});
}

export default Component;
