import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en_nqv76t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en_nqv76t"/>`,
		"fallback": "glyphs:docs",
	});
}

export default Component;
