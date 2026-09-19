import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prhe_ibqx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prhe_ibqx"/>`,
		"fallback": "si-glyph:circle-plus",
	});
}

export default Component;
