import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6mibqsee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6mibqsee"/>`,
		"fallback": "dashicons:email-alt2",
	});
}

export default Component;
