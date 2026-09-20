import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc6clwbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc6clwbls"/>`,
		"fallback": "ri:closed-captioning-ai-line",
	});
}

export default Component;
