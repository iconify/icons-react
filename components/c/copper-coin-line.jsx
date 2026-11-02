import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um7mmebks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um7mmebks"/>`,
		"fallback": "mingcute:copper-coin-line",
	});
}

export default Component;
