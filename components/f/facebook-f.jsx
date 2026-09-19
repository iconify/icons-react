import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb3ggp-ub.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb3ggp-ub"/>`,
		"fallback": "fa6-brands:facebook-f",
	});
}

export default Component;
