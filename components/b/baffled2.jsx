import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8t7ilbin.css';
import '../../css/n/nxzuucrxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8t7ilbin"/><path class="nxzuucrxz"/>`,
		"fallback": "icomoon-free:baffled2",
	});
}

export default Component;
