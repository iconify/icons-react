import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/famlpk19j.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="famlpk19j"/>`,
		"fallback": "si-glyph:cover-flow",
	});
}

export default Component;
