import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggxo8pl6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggxo8pl6h"/>`,
		"fallback": "mingcute:badge-cny-line",
	});
}

export default Component;
