import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_e3j9oms.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_e3j9oms"/>`,
		"fallback": "octicon:arrow-down-left-16",
	});
}

export default Component;
