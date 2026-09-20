import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp8wi1brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp8wi1brp"/>`,
		"fallback": "ri:code-ai-line",
	});
}

export default Component;
