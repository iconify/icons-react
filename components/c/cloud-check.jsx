import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k18qk85-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k18qk85-o"/>`,
		"fallback": "hugeicons:cloud-check",
	});
}

export default Component;
