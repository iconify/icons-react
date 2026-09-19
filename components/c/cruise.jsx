import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy9uw-bwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy9uw-bwx"/>`,
		"fallback": "si-glyph:cruise",
	});
}

export default Component;
