import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2m5ehb3r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2m5ehb3r"/>`,
		"fallback": "carbon:array-users",
	});
}

export default Component;
