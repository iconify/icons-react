import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beh7sz67x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beh7sz67x"/>`,
		"fallback": "si-glyph:android",
	});
}

export default Component;
