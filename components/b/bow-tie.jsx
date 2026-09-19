import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhd610b8y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhd610b8y"/>`,
		"fallback": "si-glyph:bow-tie",
	});
}

export default Component;
