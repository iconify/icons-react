import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_r-zqlu.css';
import '../../css/j/j7r6crb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_r-zqlu"/><path class="j7r6crb5a"/>`,
		"fallback": "mingcute:cellphone-2-ai-line",
	});
}

export default Component;
