import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjqoj_b0c.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjqoj_b0c"/>`,
		"fallback": "si-glyph:gas-station",
	});
}

export default Component;
