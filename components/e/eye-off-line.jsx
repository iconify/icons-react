import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj449perf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj449perf"/>`,
		"fallback": "majesticons:eye-off-line",
	});
}

export default Component;
