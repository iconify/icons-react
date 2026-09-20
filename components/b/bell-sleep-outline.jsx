import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyoxq9mwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyoxq9mwi"/>`,
		"fallback": "mdi:bell-sleep-outline",
	});
}

export default Component;
