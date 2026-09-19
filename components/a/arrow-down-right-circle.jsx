import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml2bg2b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml2bg2b2l"/>`,
		"fallback": "bi:arrow-down-right-circle",
	});
}

export default Component;
