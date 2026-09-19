import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8b-mib4c.css';
import '../../css/v/vs9a-qkba.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8b-mib4c"/><path class="vs9a-qkba"/>`,
		"fallback": "garden:arrow-left-fill-12",
	});
}

export default Component;
