import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0b_ulbpt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0b_ulbpt"/>`,
		"fallback": "glyphs:activity-duo",
	});
}

export default Component;
