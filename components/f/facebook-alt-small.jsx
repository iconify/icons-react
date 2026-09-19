import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydba-6b7x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydba-6b7x"/>`,
		"fallback": "dinkie-icons:facebook-alt-small",
	});
}

export default Component;
