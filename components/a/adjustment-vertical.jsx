import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe-7uybqg.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe-7uybqg"/>`,
		"fallback": "si-glyph:adjustment-vertical",
	});
}

export default Component;
