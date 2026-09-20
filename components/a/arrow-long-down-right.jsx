import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m289c-bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m289c-bmm"/>`,
		"fallback": "mynaui:arrow-long-down-right",
	});
}

export default Component;
