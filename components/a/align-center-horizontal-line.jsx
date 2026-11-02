import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmtwrx6vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmtwrx6vc"/>`,
		"fallback": "mingcute:align-center-horizontal-line",
	});
}

export default Component;
