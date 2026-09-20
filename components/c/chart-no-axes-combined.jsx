import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhhps6bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhhps6bkj"/>`,
		"fallback": "mynaui:chart-no-axes-combined",
	});
}

export default Component;
