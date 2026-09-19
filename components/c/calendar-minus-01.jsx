import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv4m4mbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv4m4mbnq"/>`,
		"fallback": "hugeicons:calendar-minus-01",
	});
}

export default Component;
