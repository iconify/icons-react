import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol-y4ub0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol-y4ub0o"/>`,
		"fallback": "griddy-icons:frontdesk-ai-assistant",
	});
}

export default Component;
