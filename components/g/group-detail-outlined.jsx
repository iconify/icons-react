import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxjrqc45e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxjrqc45e"/>`,
		"fallback": "weui:group-detail-outlined",
	});
}

export default Component;
