import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdy_rh-at.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdy_rh-at"/>`,
		"fallback": "si-glyph:diamond",
	});
}

export default Component;
