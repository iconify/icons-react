import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxs2987xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxs2987xv"/>`,
		"fallback": "hugeicons:cloud-off",
	});
}

export default Component;
