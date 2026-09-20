import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxo9y8bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxo9y8bkc"/>`,
		"fallback": "mynaui:chart-no-axes-column-decreasing-solid",
	});
}

export default Component;
