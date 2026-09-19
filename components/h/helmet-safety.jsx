import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp0ly3b3i.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp0ly3b3i"/>`,
		"fallback": "fa6-solid:helmet-safety",
	});
}

export default Component;
