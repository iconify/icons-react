import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkpb6dbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkpb6dbuc"/>`,
		"fallback": "mingcute:counter-2-line",
	});
}

export default Component;
