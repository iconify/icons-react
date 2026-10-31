import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8gezv97u.css';
import '../../css/x/x3cbt25_s.css';
import '../../css/i/irszdrruk.css';
import '../../css/l/l2jpnxw8r.css';
import '../../css/h/h9hwb0bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f8gezv97u wm-k"/><path class="wm-deco x3cbt25_s"/><path class="irszdrruk wm-k"/><path class="l2jpnxw8r wm-shadow"/><path class="h9hwb0bkv wm-shine"/></g>`,
		"fallback": "withicons-valentine:fireplace",
	});
}

export default Component;
