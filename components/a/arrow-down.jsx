import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyz25t6vc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyz25t6vc"/>`,
		"fallback": "bi:arrow-down",
	});
}

export default Component;
