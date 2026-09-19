import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4nf0t8ff.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4nf0t8ff"/>`,
		"fallback": "si-glyph:fence",
	});
}

export default Component;
