import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfr5lhbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfr5lhbab"/>`,
		"fallback": "boxicons:doughnut-chart",
	});
}

export default Component;
