import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52qjsb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h52qjsb9w"/>`,
		"fallback": "coolicons:drill-round",
	});
}

export default Component;
