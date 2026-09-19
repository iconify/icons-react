import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y993d1bmn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y993d1bmn"/>`,
		"fallback": "si-glyph:coconut",
	});
}

export default Component;
