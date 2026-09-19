import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdqopwbux.css';

const viewBox = {"width":24,"height":24,"left":0.1,"top":0.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdqopwbux"/>`,
		"fallback": "eva:droplet-outline",
	});
}

export default Component;
