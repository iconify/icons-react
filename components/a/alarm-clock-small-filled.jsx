import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yze8n3h-u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yze8n3h-u"/>`,
		"fallback": "dinkie-icons:alarm-clock-small-filled",
	});
}

export default Component;
