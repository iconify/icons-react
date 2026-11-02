import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjqd8mbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjqd8mbll"/>`,
		"fallback": "mingcute:circle-divide-fill",
	});
}

export default Component;
