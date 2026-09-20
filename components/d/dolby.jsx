import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz7xyyd4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz7xyyd4u"/>`,
		"fallback": "mdi:dolby",
	});
}

export default Component;
