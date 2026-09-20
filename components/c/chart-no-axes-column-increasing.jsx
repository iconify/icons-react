import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgadrsbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgadrsbeb"/>`,
		"fallback": "mynaui:chart-no-axes-column-increasing",
	});
}

export default Component;
