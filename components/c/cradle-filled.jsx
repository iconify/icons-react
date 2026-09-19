import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbpd1jbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbpd1jbgi"/>`,
		"fallback": "griddy-icons:cradle-filled",
	});
}

export default Component;
