import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa4v_sqyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa4v_sqyx"/>`,
		"fallback": "mingcute:align-arrow-left-fill",
	});
}

export default Component;
