import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0fq-mbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0fq-mbgc"/>`,
		"fallback": "mingcute:battery-1-fill",
	});
}

export default Component;
