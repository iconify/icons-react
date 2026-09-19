import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgx_e8bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgx_e8bxr"/>`,
		"fallback": "gridicons:arrow-right",
	});
}

export default Component;
