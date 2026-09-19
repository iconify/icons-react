import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1zwh7b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1zwh7b5m"/>`,
		"fallback": "griddy-icons:bacon",
	});
}

export default Component;
