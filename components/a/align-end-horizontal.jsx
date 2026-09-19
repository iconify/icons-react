import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_e0-5e6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_e0-5e6i"/>`,
		"fallback": "hugeicons:align-end-horizontal",
	});
}

export default Component;
