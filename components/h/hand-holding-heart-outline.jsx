import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk7d680ye.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pk7d680ye"/>`,
		"fallback": "glyphs:hand-holding-heart-outline",
	});
}

export default Component;
