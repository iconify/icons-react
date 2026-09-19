import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrr5k9-6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrr5k9-6q"/>`,
		"fallback": "si-glyph:arrow-resize-1",
	});
}

export default Component;
