import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/toqfeqwxd.css';
import '../../css/a/avwn_tn0m.css';
import '../../css/t/tsoxedcoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="toqfeqwxd wm-shadow"/><path class="avwn_tn0m wm-shadow"/><path class="tsoxedcoo"/></g>`,
		"fallback": "withicons-brutal:contactless",
	});
}

export default Component;
