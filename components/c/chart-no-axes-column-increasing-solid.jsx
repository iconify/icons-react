import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn2_-vbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn2_-vbge"/>`,
		"fallback": "mynaui:chart-no-axes-column-increasing-solid",
	});
}

export default Component;
