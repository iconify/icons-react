import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo5xe0b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo5xe0b5w"/>`,
		"fallback": "mingcute:chart-area-fill",
	});
}

export default Component;
