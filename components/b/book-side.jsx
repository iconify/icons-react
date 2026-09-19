import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kadhl0b1c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kadhl0b1c"/>`,
		"fallback": "glyphs:book-side",
	});
}

export default Component;
