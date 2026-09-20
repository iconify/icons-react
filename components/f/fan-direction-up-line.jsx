import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haqr67bmp.css';
import '../../css/i/iixqn4bev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haqr67bmp"/><path class="iixqn4bev"/>`,
		"fallback": "mingcute:fan-direction-up-line",
	});
}

export default Component;
