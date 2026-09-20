import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krmec0bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krmec0bwt"/>`,
		"fallback": "mingcute:butterfly-line",
	});
}

export default Component;
