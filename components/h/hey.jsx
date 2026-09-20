import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtyb8y3nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtyb8y3nc"/>`,
		"fallback": "simple-icons:hey",
	});
}

export default Component;
