import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xam6glbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xam6glbxa"/>`,
		"fallback": "hugeicons:chart-analysis",
	});
}

export default Component;
