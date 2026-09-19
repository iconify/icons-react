import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4u7qfb2i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4u7qfb2i"/>`,
		"fallback": "dinkie-icons:electric-light-bulb-small-filled",
	});
}

export default Component;
