import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h56kjmbec.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h56kjmbec"/>`,
		"fallback": "si-glyph:arrow-two-up",
	});
}

export default Component;
