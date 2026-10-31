import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqrqvz3rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqrqvz3rm"/>`,
		"fallback": "coolicons:chart-bar-vertical-duocolor-round",
	});
}

export default Component;
