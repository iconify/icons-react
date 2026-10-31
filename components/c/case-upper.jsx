import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jcdhmmfoc.css';
import '../../css/y/ypahgr22z.css';
import '../../css/w/wor8knb1q.css';
import '../../css/b/b3yix0lha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jcdhmmfoc wm-shadow"/><path class="wm-shadow ypahgr22z"/><path class="wor8knb1q"/><path class="b3yix0lha"/></g>`,
		"fallback": "withicons-brutal:case-upper",
	});
}

export default Component;
