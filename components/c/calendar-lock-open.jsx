import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn-2qlb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn-2qlb7p"/>`,
		"fallback": "mdi:calendar-lock-open",
	});
}

export default Component;
