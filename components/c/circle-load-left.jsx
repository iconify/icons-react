import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp1gulu_t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp1gulu_t"/>`,
		"fallback": "si-glyph:circle-load-left",
	});
}

export default Component;
