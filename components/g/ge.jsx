import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc8q0j5av.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc8q0j5av"/>`,
		"fallback": "fa:ge",
	});
}

export default Component;
