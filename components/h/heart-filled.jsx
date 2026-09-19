import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcmcnz_9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcmcnz_9z"/>`,
		"fallback": "griddy-icons:heart-filled",
	});
}

export default Component;
