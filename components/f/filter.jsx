import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtj4og6cw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtj4og6cw"/>`,
		"fallback": "dinkie-icons:filter",
	});
}

export default Component;
