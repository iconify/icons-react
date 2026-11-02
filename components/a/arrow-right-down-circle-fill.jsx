import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/std5kpb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="std5kpb1j"/>`,
		"fallback": "mingcute:arrow-right-down-circle-fill",
	});
}

export default Component;
