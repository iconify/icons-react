import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgd2dfakh.css';
import '../../css/g/g60xlcbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rgd2dfakh"/><path class="g60xlcbck"/></g>`,
		"fallback": "majesticons:chart-pie",
	});
}

export default Component;
