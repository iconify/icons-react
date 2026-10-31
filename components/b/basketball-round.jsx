import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsp2g4brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsp2g4brj"/>`,
		"fallback": "coolicons:basketball-round",
	});
}

export default Component;
