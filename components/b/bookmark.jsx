import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnr0-ylgl.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnr0-ylgl"/>`,
		"fallback": "si-glyph:bookmark",
	});
}

export default Component;
