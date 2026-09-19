import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq051_tou.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq051_tou"/>`,
		"fallback": "fa6-solid:capsules",
	});
}

export default Component;
