import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_f9w-laq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_f9w-laq"/>`,
		"fallback": "bi:cake-fill",
	});
}

export default Component;
