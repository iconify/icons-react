import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq9mvibxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq9mvibxl"/>`,
		"fallback": "solar:home-2-bold",
	});
}

export default Component;
