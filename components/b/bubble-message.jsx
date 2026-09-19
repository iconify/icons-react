import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg3dhfb2n.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg3dhfb2n"/>`,
		"fallback": "si-glyph:bubble-message",
	});
}

export default Component;
