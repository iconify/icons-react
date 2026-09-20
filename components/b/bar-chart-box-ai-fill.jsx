import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5o7pmb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5o7pmb-t"/>`,
		"fallback": "ri:bar-chart-box-ai-fill",
	});
}

export default Component;
