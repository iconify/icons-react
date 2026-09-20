import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpg27mbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpg27mbvu"/>`,
		"fallback": "keyline-icons:app-dot-fill",
	});
}

export default Component;
