import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv1v87bgn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv1v87bgn"/>`,
		"fallback": "fa-solid:frog",
	});
}

export default Component;
