import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m01hnh5mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m01hnh5mm"/>`,
		"fallback": "mingcute:dragonfly-line",
	});
}

export default Component;
