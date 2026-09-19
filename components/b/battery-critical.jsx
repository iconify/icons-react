import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haoji6kic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haoji6kic"/>`,
		"fallback": "cbi:battery-critical",
	});
}

export default Component;
