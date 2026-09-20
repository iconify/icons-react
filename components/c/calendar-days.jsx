import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxxjieq7t.css';
import '../../css/l/lec3gmbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxxjieq7t"/><path class="lec3gmbyk"/>`,
		"fallback": "lineicons:calendar-days",
	});
}

export default Component;
