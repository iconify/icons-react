import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7q6albzn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7q6albzn"/>`,
		"fallback": "dinkie-icons:closed-mailbox-lowered-flag",
	});
}

export default Component;
