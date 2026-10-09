import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yajgwt04s.css';
import '../../css/t/t0m57ubqr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yajgwt04s"/><path class="t0m57ubqr"/>`,
		"fallback": "energy-icons:chart-line-20",
	});
}

export default Component;
