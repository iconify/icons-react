import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l503qdb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l503qdb0v"/>`,
		"fallback": "mdi:flag-outline",
	});
}

export default Component;
