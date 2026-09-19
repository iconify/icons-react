import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbm4hfb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbm4hfb_l"/>`,
		"fallback": "hugeicons:heart-remove",
	});
}

export default Component;
