import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn3fnbnbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn3fnbnbu"/>`,
		"fallback": "mingcute:drive-line",
	});
}

export default Component;
