import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufy_ol7bn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufy_ol7bn"/>`,
		"fallback": "si-glyph:drop-water",
	});
}

export default Component;
