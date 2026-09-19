import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6tv7ib_p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6tv7ib_p"/>`,
		"fallback": "si-glyph:checked",
	});
}

export default Component;
