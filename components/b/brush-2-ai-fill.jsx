import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrztamb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrztamb4g"/>`,
		"fallback": "mingcute:brush-2-ai-fill",
	});
}

export default Component;
