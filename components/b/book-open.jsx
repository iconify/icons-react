import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4o723les.css';
import '../../css/x/xjwpjterx.css';
import '../../css/u/u-a9kl7lp.css';
import '../../css/v/vagq27ajr.css';
import '../../css/t/ts_tupb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l4o723les wm-shadow"/><path class="wm-shadow xjwpjterx"/><path class="u-a9kl7lp"/><path class="vagq27ajr"/><path class="ts_tupb_h"/></g>`,
		"fallback": "withicons-brutal:book-open",
	});
}

export default Component;
