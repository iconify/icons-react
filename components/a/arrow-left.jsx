import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0o2q1bsm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0o2q1bsm"/>`,
		"fallback": "fa7-solid:arrow-left",
	});
}

export default Component;
