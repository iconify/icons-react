import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhi--6bpa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhi--6bpa"/>`,
		"fallback": "streamline-pixel:health-monitor-heart-beat",
	});
}

export default Component;
