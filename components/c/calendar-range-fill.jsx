import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbn8dlkys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbn8dlkys"/>`,
		"fallback": "mingcute:calendar-range-fill",
	});
}

export default Component;
