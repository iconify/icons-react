import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr-_4lbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr-_4lbec"/>`,
		"fallback": "mdi:home-group",
	});
}

export default Component;
