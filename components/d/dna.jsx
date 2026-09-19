import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcgi76ztd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcgi76ztd"/>`,
		"fallback": "si-glyph:dna",
	});
}

export default Component;
