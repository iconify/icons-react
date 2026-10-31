import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04gq1kef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s04gq1kef"/>`,
		"fallback": "coolicons:chart-bar-stacked-round",
	});
}

export default Component;
