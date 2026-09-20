import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcokp6bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcokp6bac"/>`,
		"fallback": "uis:align-left",
	});
}

export default Component;
