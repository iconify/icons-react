import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vijyxxdge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vijyxxdge"/>`,
		"fallback": "noviair-light:briefcase-clock",
	});
}

export default Component;
