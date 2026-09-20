import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g03q9xe2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g03q9xe2m"/>`,
		"fallback": "mynaui:ambulance",
	});
}

export default Component;
