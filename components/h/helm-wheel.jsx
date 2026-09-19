import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuy_jrmro.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuy_jrmro"/>`,
		"fallback": "si-glyph:helm-wheel",
	});
}

export default Component;
