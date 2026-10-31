import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enj0h4zby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enj0h4zby"/>`,
		"fallback": "withicons:circle-dollar-sign-gloss",
	});
}

export default Component;
