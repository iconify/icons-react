import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l57g0pdpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l57g0pdpl"/>`,
		"fallback": "ri:apps-ai-fill",
	});
}

export default Component;
