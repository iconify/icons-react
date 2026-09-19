import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdit7nflt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdit7nflt"/>`,
		"fallback": "si-glyph:arrow-resize-4",
	});
}

export default Component;
