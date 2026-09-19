import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az412mbem.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az412mbem"/>`,
		"fallback": "si-glyph:city",
	});
}

export default Component;
