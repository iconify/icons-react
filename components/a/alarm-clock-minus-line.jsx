import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcfax0boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcfax0boh"/>`,
		"fallback": "mingcute:alarm-clock-minus-line",
	});
}

export default Component;
