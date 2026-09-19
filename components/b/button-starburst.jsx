import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szv6o4bks.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szv6o4bks"/>`,
		"fallback": "si-glyph:button-starburst",
	});
}

export default Component;
