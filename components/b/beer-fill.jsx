import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veeb6g1ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veeb6g1ym"/>`,
		"fallback": "mingcute:beer-fill",
	});
}

export default Component;
