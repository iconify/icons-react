import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x44d7jblv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x44d7jblv"/>`,
		"fallback": "fa6-brands:google-pay",
	});
}

export default Component;
