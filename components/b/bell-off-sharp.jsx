import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te2583bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te2583bwr"/>`,
		"fallback": "keyline-icons:bell-off-sharp",
	});
}

export default Component;
