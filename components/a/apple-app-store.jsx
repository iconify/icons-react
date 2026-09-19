import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7ekkbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro7ekkbkr"/>`,
		"fallback": "grommet-icons:apple-app-store",
	});
}

export default Component;
