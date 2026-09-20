import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjrq__szk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjrq__szk"/>`,
		"fallback": "mdi:circle-slice-2",
	});
}

export default Component;
