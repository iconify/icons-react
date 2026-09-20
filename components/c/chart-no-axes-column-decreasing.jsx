import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my9xahb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my9xahb-e"/>`,
		"fallback": "mynaui:chart-no-axes-column-decreasing",
	});
}

export default Component;
