import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_bf-10yc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_bf-10yc"/>`,
		"fallback": "si-glyph:basket-arrow-right",
	});
}

export default Component;
