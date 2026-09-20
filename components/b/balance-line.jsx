import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho2uy5bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho2uy5bki"/>`,
		"fallback": "mingcute:balance-line",
	});
}

export default Component;
