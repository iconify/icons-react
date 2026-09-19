import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7f1au4gn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7f1au4gn"/>`,
		"fallback": "dinkie-icons:closed-mailbox-raised-flag",
	});
}

export default Component;
