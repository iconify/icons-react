import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et9yusbvj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et9yusbvj"/>`,
		"fallback": "si-glyph:brightness",
	});
}

export default Component;
