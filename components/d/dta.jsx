import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ups_s6b9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ups_s6b9n"/>`,
		"fallback": "cryptocurrency:dta",
	});
}

export default Component;
