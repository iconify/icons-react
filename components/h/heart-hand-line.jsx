import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxbnq1bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxbnq1bpk"/>`,
		"fallback": "mingcute:heart-hand-line",
	});
}

export default Component;
