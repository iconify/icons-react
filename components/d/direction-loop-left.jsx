import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkjb6_06b.css';
import '../../css/y/y--yqbbfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkjb6_06b"/><path class="y--yqbbfh"/>`,
		"fallback": "carbon:direction-loop-left",
	});
}

export default Component;
