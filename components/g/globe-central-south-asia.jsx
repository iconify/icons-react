import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd58ee2ql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd58ee2ql"/>`,
		"fallback": "bi:globe-central-south-asia",
	});
}

export default Component;
