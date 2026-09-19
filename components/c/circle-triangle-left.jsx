import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxajylj6q.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxajylj6q"/>`,
		"fallback": "si-glyph:circle-triangle-left",
	});
}

export default Component;
