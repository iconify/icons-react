import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxv6y6bpx.css';
import '../../css/k/kdqyt0wqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxv6y6bpx"/><path class="kdqyt0wqb"/>`,
		"fallback": "boxicons:headphone-alt-2",
	});
}

export default Component;
