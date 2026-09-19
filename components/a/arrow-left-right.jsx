import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h20a15_6f.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h20a15_6f"/>`,
		"fallback": "si-glyph:arrow-left-right",
	});
}

export default Component;
