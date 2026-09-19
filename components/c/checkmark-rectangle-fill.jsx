import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iix0k_bgr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iix0k_bgr"/>`,
		"fallback": "f7:checkmark-rectangle-fill",
	});
}

export default Component;
