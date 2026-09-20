import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh0myxh6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh0myxh6i"/>`,
		"fallback": "nimbus:fire",
	});
}

export default Component;
