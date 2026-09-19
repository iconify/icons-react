import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq4a1cc0i.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq4a1cc0i"/>`,
		"fallback": "si-glyph:cherry",
	});
}

export default Component;
