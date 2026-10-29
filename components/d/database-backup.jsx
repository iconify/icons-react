import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l6ij0fb_t.css';
import '../../css/o/o-3onsb9p.css';
import '../../css/r/r-mc9nbft.css';
import '../../css/b/bqfcqsczd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l6ij0fb_t wm-k"/><path class="o-3onsb9p"/><path class="r-mc9nbft"/><path class="bqfcqsczd wm-s"/></g>`,
		"fallback": "withicons-bauhaus:database-backup",
	});
}

export default Component;
