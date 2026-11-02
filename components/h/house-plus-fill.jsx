import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p667ec9ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p667ec9ue"/>`,
		"fallback": "mingcute:house-plus-fill",
	});
}

export default Component;
