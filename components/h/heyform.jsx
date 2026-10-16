import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od6iwkbev.css';
import '../../css/p/p7gtvpbix.css';
import '../../css/u/unj_jcx7h.css';

const viewBox = {"width":107,"height":108};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="od6iwkbev"/><path class="p7gtvpbix"/><path class="unj_jcx7h"/></g>`,
		"fallback": "thesvg-color:heyform",
	});
}

export default Component;
