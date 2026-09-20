import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfsbn6bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfsbn6bjm"/>`,
		"fallback": "streamline-sharp:calendar-warning",
	});
}

export default Component;
