import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4gqgybhp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4gqgybhp"/>`,
		"fallback": "si-glyph:eye-drop",
	});
}

export default Component;
