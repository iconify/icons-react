import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc5k_m5oc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc5k_m5oc"/>`,
		"fallback": "fa6-solid:brain",
	});
}

export default Component;
