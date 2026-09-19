import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1j28zb1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1j28zb1h"/>`,
		"fallback": "glyphs-poly:check",
	});
}

export default Component;
