import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mctm2wb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mctm2wb9b"/>`,
		"fallback": "hugeicons:calendar-x-01",
	});
}

export default Component;
