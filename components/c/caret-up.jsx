import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjkf41rvs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjkf41rvs"/>`,
		"fallback": "fa7-solid:caret-up",
	});
}

export default Component;
