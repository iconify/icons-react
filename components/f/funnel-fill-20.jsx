import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0frwm-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0frwm-h"/>`,
		"fallback": "garden:funnel-fill-20",
	});
}

export default Component;
