import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4o6kcc9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4o6kcc9r"/>`,
		"fallback": "reicon:arrow-left5-filled",
	});
}

export default Component;
