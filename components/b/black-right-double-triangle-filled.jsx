import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfi93jbjb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfi93jbjb"/>`,
		"fallback": "dinkie-icons:black-right-double-triangle-filled",
	});
}

export default Component;
