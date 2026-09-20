import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxe3r5pqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxe3r5pqw"/>`,
		"fallback": "mdi:circle-half",
	});
}

export default Component;
