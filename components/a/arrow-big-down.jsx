import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg3ameb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg3ameb8d"/>`,
		"fallback": "mynaui:arrow-big-down",
	});
}

export default Component;
