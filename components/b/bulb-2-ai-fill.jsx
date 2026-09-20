import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d204npb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d204npb2c"/>`,
		"fallback": "mingcute:bulb-2-ai-fill",
	});
}

export default Component;
