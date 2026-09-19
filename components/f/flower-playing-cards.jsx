import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udk5w8b3q.css';
import '../../css/i/inzppicrm.css';
import '../../css/g/g49nu_bhy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="udk5w8b3q"/><path class="inzppicrm"/><path class="g49nu_bhy"/></g>`,
		"fallback": "fluent-emoji-flat:flower-playing-cards",
	});
}

export default Component;
