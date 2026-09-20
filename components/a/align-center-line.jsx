import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cepgkhwtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cepgkhwtc"/>`,
		"fallback": "mingcute:align-center-line",
	});
}

export default Component;
