import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2_ki8_mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2_ki8_mg"/>`,
		"fallback": "ri:bar-chart-box-ai-line",
	});
}

export default Component;
