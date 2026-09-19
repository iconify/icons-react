import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf2_240wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tf2_240wr"/>`,
		"fallback": "healthicons:ambulatory-clinic-outline-24px",
	});
}

export default Component;
