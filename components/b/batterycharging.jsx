import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go4klvj4q.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go4klvj4q"/>`,
		"fallback": "whh:batterycharging",
	});
}

export default Component;
