import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-7s1tbdr.css';
import '../../css/d/ds0uwvbso.css';
import '../../css/t/te1bgvv9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow y-7s1tbdr"/><path class="ds0uwvbso wm-k"/><path class="te1bgvv9h wm-k"/>`,
		"fallback": "withicons-pastel:chevron-right",
	});
}

export default Component;
