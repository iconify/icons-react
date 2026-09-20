import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg7v921kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg7v921kl"/>`,
		"fallback": "ri:ai-generate-3d-fill",
	});
}

export default Component;
