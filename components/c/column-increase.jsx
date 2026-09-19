import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slr3n6bse.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slr3n6bse"/>`,
		"fallback": "si-glyph:column-increase",
	});
}

export default Component;
