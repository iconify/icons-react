import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4o723les.css';
import '../../css/x/xjwpjterx.css';
import '../../css/f/fabla4b9k.css';
import '../../css/o/oghm6gbzy.css';
import '../../css/u/u7-upejhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l4o723les wm-shadow"/><path class="wm-shadow xjwpjterx"/><path class="fabla4b9k"/><path class="oghm6gbzy"/><path class="u7-upejhg"/></g>`,
		"fallback": "withicons-brutal:book-open-check",
	});
}

export default Component;
