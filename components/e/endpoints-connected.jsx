import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1wlb05zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1wlb05zl"/>`,
		"fallback": "eos-icons:endpoints-connected",
	});
}

export default Component;
