import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/febx_bbdz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="febx_bbdz"/>`,
		"fallback": "si-glyph:arrow-thin-right-bottom",
	});
}

export default Component;
