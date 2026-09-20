import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go7qv8fna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go7qv8fna"/>`,
		"fallback": "mdi:car-turbocharger",
	});
}

export default Component;
