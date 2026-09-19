import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7ny9x4z.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7ny9x4z"/>`,
		"fallback": "si-glyph:hand-switch",
	});
}

export default Component;
