import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h93r4zbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h93r4zbus"/>`,
		"fallback": "griddy-icons:email",
	});
}

export default Component;
