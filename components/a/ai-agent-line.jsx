import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtt9_ab8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtt9_ab8z"/>`,
		"fallback": "ri:ai-agent-line",
	});
}

export default Component;
