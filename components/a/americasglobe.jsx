import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic6wf_bti.css';
import '../../css/h/h-x55eb4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic6wf_bti"/><path class="h-x55eb4t"/>`,
		"fallback": "fxemoji:americasglobe",
	});
}

export default Component;
