import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qln93qb2w.css';
import '../../css/u/u_rcl8a1o.css';
import '../../css/x/xar7h661p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qln93qb2w"/><path class="u_rcl8a1o"/><path class="xar7h661p"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-diagonal-mouth",
	});
}

export default Component;
