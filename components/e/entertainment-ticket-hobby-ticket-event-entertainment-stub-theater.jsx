import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-mcxxb8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-mcxxb8m"/>`,
		"fallback": "streamline:entertainment-ticket-hobby-ticket-event-entertainment-stub-theater",
	});
}

export default Component;
