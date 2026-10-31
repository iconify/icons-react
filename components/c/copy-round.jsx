import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etv10-q7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etv10-q7l"/>`,
		"fallback": "coolicons:copy-round",
	});
}

export default Component;
