import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc4m7k-7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc4m7k-7b"/>`,
		"fallback": "mdi-light:bank",
	});
}

export default Component;
