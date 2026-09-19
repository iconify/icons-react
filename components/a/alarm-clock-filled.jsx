import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngx1zebbc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngx1zebbc"/>`,
		"fallback": "dinkie-icons:alarm-clock-filled",
	});
}

export default Component;
