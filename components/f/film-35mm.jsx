import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsx39kbkz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsx39kbkz"/>`,
		"fallback": "si-glyph:film-35mm",
	});
}

export default Component;
