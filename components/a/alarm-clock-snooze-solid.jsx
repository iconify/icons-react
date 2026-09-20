import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdp6nbcid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdp6nbcid"/>`,
		"fallback": "mynaui:alarm-clock-snooze-solid",
	});
}

export default Component;
