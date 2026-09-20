import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by007idoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by007idoi"/>`,
		"fallback": "mdi:arrow-top-drop-circle-outline",
	});
}

export default Component;
