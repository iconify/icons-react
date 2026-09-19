import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3x2en2ew.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b3x2en2ew"/>`,
		"fallback": "glyphs:hand-index-outline",
	});
}

export default Component;
