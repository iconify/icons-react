import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzsfz8ozm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzsfz8ozm"/>`,
		"fallback": "mdi-light:circle",
	});
}

export default Component;
