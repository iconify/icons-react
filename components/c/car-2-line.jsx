import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgimc7f1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgimc7f1c"/>`,
		"fallback": "mingcute:car-2-line",
	});
}

export default Component;
