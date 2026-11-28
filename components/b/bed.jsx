import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q406r4l9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q406r4l9v"/>`,
		"fallback": "noviair-light:bed",
	});
}

export default Component;
