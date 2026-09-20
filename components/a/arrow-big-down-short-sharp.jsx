import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmok5rrec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmok5rrec"/>`,
		"fallback": "keyline-icons:arrow-big-down-short-sharp",
	});
}

export default Component;
