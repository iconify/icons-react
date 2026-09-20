import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhiqf8q1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhiqf8q1b"/>`,
		"fallback": "keyline-icons:chart-line-down-sharp",
	});
}

export default Component;
