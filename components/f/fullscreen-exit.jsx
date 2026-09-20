import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kob3cc21s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kob3cc21s"/>`,
		"fallback": "mdi:fullscreen-exit",
	});
}

export default Component;
