import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqm-8rbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqm-8rbwe"/>`,
		"fallback": "mdi:drop-outline",
	});
}

export default Component;
