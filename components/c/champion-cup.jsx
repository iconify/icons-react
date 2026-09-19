import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqq00-9sp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqq00-9sp"/>`,
		"fallback": "si-glyph:champion-cup",
	});
}

export default Component;
