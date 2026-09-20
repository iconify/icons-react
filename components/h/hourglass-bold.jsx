import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fphliab1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fphliab1q"/>`,
		"fallback": "solar:hourglass-bold",
	});
}

export default Component;
