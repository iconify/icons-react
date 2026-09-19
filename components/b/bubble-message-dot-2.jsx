import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctp10hf8t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctp10hf8t"/>`,
		"fallback": "si-glyph:bubble-message-dot-2",
	});
}

export default Component;
