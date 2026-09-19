import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiako2bte.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiako2bte"/>`,
		"fallback": "si-glyph:brush-1",
	});
}

export default Component;
