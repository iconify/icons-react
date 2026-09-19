import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f221h1bhy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f221h1bhy"/>`,
		"fallback": "si-glyph:circle-info",
	});
}

export default Component;
