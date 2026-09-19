import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4uk8wrue.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4uk8wrue"/>`,
		"fallback": "zmdi:alarm-snooze",
	});
}

export default Component;
