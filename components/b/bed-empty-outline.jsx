import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgpee-b0e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tgpee-b0e"/>`,
		"fallback": "glyphs:bed-empty-outline",
	});
}

export default Component;
