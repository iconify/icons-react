import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na5768bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na5768bvf"/>`,
		"fallback": "mingcute:classify-ai-fill",
	});
}

export default Component;
