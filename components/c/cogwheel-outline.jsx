import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkvmf2k6h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jkvmf2k6h"/>`,
		"fallback": "glyphs:cogwheel-outline",
	});
}

export default Component;
