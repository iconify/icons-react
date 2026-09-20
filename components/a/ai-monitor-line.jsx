import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs60f7byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs60f7byn"/>`,
		"fallback": "si:ai-monitor-line",
	});
}

export default Component;
