import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojjrbdc4i.css';

const viewBox = {"width":455,"height":781};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojjrbdc4i"/>`,
		"fallback": "ls:6",
	});
}

export default Component;
