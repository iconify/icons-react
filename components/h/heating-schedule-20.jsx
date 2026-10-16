import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjzgm6b2a.css';
import '../../css/k/ktpspx8sw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjzgm6b2a"/><path class="ktpspx8sw"/>`,
		"fallback": "energy-icons:heating-schedule-20",
	});
}

export default Component;
