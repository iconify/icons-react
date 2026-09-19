import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhmi6qb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhmi6qb4a"/>`,
		"fallback": "griddy-icons:drawing-compass-filled",
	});
}

export default Component;
