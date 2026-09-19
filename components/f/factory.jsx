import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-h9r1mla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-h9r1mla"/>`,
		"fallback": "si-glyph:factory",
	});
}

export default Component;
