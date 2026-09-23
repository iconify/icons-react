import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls4o5rx5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls4o5rx5k"/>`,
		"fallback": "keyline-icons:arrow-right-to-line-duotone",
	});
}

export default Component;
