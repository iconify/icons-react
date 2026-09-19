import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lypw1fb-u.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lypw1fb-u"/>`,
		"fallback": "fa6-solid:house-medical-circle-check",
	});
}

export default Component;
