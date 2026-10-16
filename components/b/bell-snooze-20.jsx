import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhcjdtn8d.css';
import '../../css/l/l8_-m635t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhcjdtn8d"/><path class="l8_-m635t"/>`,
		"fallback": "energy-icons:bell-snooze-20",
	});
}

export default Component;
