import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uabh9ub8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uabh9ub8o"/>`,
		"fallback": "sidekickicons:arrows-crossing",
	});
}

export default Component;
