import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h811jub2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h811jub2x"/>`,
		"fallback": "carbon:ibm-turbonomic",
	});
}

export default Component;
