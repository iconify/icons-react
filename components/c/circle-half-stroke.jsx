import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utqr_sbzu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utqr_sbzu"/>`,
		"fallback": "fa6-solid:circle-half-stroke",
	});
}

export default Component;
