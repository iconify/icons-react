import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvcoe55wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvcoe55wa"/>`,
		"fallback": "mynaui:cloud-rain-solid",
	});
}

export default Component;
