import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veq3ccc5e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veq3ccc5e"/>`,
		"fallback": "fa6-solid:check-to-slot",
	});
}

export default Component;
