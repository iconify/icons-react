import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-yd735tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-yd735tb"/>`,
		"fallback": "healthicons:bone-long-24px",
	});
}

export default Component;
