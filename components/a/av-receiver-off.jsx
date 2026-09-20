import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdh-geker.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdh-geker"/>`,
		"fallback": "mdi:av-receiver-off",
	});
}

export default Component;
