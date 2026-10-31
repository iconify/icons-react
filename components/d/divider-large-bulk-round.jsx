import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oay8kys0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oay8kys0m"/>`,
		"fallback": "coolicons:divider-large-bulk-round",
	});
}

export default Component;
