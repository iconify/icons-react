import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skz7itc8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skz7itc8o"/>`,
		"fallback": "thesvg-color:create-react-app",
	});
}

export default Component;
