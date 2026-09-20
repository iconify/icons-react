import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ns86i3bro.css';
import '../../css/i/il5atjb1q.css';
import '../../css/i/is-uugo3q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ns86i3bro"/><path class="il5atjb1q"/><path class="is-uugo3q"/></g>`,
		"fallback": "streamline-flex-color:discussion-converstion-reply",
	});
}

export default Component;
