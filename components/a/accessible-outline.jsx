import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig9f87b2y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ig9f87b2y"/>`,
		"fallback": "glyphs:accessible-outline",
	});
}

export default Component;
