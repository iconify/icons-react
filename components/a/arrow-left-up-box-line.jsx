import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2206v69j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2206v69j"/>`,
		"fallback": "ri:arrow-left-up-box-line",
	});
}

export default Component;
