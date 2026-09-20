import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa4gzdbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa4gzdbgl"/>`,
		"fallback": "keyline-icons:arrow-big-right-short-sharp",
	});
}

export default Component;
