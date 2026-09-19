import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1vmbtb-r.css';

const viewBox = {"width":496,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1vmbtb-r"/>`,
		"fallback": "zmdi:check-all",
	});
}

export default Component;
