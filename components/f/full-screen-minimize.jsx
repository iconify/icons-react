import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvxbm69xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvxbm69xm"/>`,
		"fallback": "proicons:full-screen-minimize",
	});
}

export default Component;
