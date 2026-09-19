import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0_s5_kbq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0_s5_kbq"/>`,
		"fallback": "fa6-solid:calendar-days",
	});
}

export default Component;
