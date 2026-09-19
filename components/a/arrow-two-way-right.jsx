import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovl0b1-lq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovl0b1-lq"/>`,
		"fallback": "si-glyph:arrow-two-way-right",
	});
}

export default Component;
