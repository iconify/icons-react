import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol0qh5boc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol0qh5boc"/>`,
		"fallback": "si-glyph:folder-share",
	});
}

export default Component;
