import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm_-v1bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm_-v1bpd"/>`,
		"fallback": "mdi:hand-bike",
	});
}

export default Component;
