import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-4l5nx5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-4l5nx5i"/>`,
		"fallback": "mingcute:candle-fill",
	});
}

export default Component;
