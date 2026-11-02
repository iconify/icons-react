import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab-d_pbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab-d_pbrz"/>`,
		"fallback": "mingcute:arrow-to-right-fill",
	});
}

export default Component;
