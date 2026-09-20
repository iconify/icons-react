import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_r-zqlu.css';
import '../../css/l/l9dsd9ghz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_r-zqlu"/><path class="l9dsd9ghz"/>`,
		"fallback": "mingcute:cellphone-2-line",
	});
}

export default Component;
