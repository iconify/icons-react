import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti7ff3-an.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti7ff3-an"/>`,
		"fallback": "si-glyph:column-wave",
	});
}

export default Component;
