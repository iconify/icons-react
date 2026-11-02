import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_yxm_tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp_yxm_tx"/>`,
		"fallback": "mingcute:grid-2x2-plus-fill",
	});
}

export default Component;
