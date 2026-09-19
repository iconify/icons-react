import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p18b64bfd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p18b64bfd"/>`,
		"fallback": "si-glyph:bookcase",
	});
}

export default Component;
