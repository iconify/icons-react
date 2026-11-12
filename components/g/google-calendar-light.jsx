import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/futyw_qpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="futyw_qpm"/>`,
		"fallback": "selfhst:google-calendar-light",
	});
}

export default Component;
