import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiofm1w_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiofm1w_m"/>`,
		"fallback": "boxicons:between-horizontal-end",
	});
}

export default Component;
