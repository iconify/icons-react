import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb0hm5tda.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb0hm5tda"/>`,
		"fallback": "si-glyph:euro",
	});
}

export default Component;
