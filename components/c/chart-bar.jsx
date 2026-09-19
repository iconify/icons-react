import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh-7cqz1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh-7cqz1c"/>`,
		"fallback": "fa-solid:chart-bar",
	});
}

export default Component;
