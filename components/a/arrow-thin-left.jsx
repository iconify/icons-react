import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa8kjxzjf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa8kjxzjf"/>`,
		"fallback": "si-glyph:arrow-thin-left",
	});
}

export default Component;
