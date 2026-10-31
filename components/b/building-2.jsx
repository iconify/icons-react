import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh90wl05i.css';
import '../../css/d/d9wctcbmc.css';
import '../../css/o/o6zqqbtwo.css';
import '../../css/n/n4pb7lbqy.css';
import '../../css/q/q1qoqacay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lh90wl05i wm-shadow"/><path class="d9wctcbmc wm-shadow"/><path class="o6zqqbtwo"/><path class="n4pb7lbqy"/><path class="q1qoqacay"/></g>`,
		"fallback": "withicons-brutal:building-2",
	});
}

export default Component;
