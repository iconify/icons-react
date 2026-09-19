import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0-wpdbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0-wpdbzm"/>`,
		"fallback": "griddy-icons:blanket",
	});
}

export default Component;
