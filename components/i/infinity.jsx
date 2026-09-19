import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocx9jvbhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocx9jvbhx"/>`,
		"fallback": "si-glyph:infinity",
	});
}

export default Component;
