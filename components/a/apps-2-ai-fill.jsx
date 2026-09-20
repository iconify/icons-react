import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qylr5_b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qylr5_b2m"/>`,
		"fallback": "ri:apps-2-ai-fill",
	});
}

export default Component;
