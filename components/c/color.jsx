import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia2agsb6u.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-7.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia2agsb6u"/>`,
		"fallback": "jam:color",
	});
}

export default Component;
