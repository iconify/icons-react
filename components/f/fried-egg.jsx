import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku8f-qb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku8f-qb7m"/>`,
		"fallback": "ps:fried-egg",
	});
}

export default Component;
