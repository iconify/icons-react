import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2b_qbhv.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_2b_qbhv"/>`,
		"fallback": "zmdi:hearing",
	});
}

export default Component;
