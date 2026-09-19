import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdtur3rmo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdtur3rmo"/>`,
		"fallback": "si-glyph:clamp",
	});
}

export default Component;
