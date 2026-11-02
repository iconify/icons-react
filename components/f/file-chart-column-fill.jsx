import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctd_733kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctd_733kb"/>`,
		"fallback": "mingcute:file-chart-column-fill",
	});
}

export default Component;
