import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzxol0-lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzxol0-lj"/>`,
		"fallback": "mingcute:horn-line",
	});
}

export default Component;
