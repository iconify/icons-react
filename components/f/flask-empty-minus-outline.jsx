import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uka2zbbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uka2zbbdu"/>`,
		"fallback": "mdi:flask-empty-minus-outline",
	});
}

export default Component;
