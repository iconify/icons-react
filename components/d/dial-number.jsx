import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbrxv12qm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbrxv12qm"/>`,
		"fallback": "si-glyph:dial-number",
	});
}

export default Component;
