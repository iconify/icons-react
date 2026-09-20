import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb9a57b5m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb9a57b5m"/>`,
		"fallback": "pinhead:arrow-down-from-envelope-in-slot",
	});
}

export default Component;
