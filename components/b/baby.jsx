import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apvclab6h.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apvclab6h"/>`,
		"fallback": "si-glyph:baby",
	});
}

export default Component;
