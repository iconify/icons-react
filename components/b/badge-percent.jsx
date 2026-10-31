import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p4u7d8hbn.css';
import '../../css/f/f7gqgccam.css';
import '../../css/w/w5ic1lftp.css';
import '../../css/d/d957qtb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p4u7d8hbn wm-shadow"/><path class="f7gqgccam wm-shadow"/><path class="w5ic1lftp"/><path class="d957qtb9w"/></g>`,
		"fallback": "withicons-brutal:badge-percent",
	});
}

export default Component;
