import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slw0lyzha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slw0lyzha"/>`,
		"fallback": "ri:filter-fill",
	});
}

export default Component;
