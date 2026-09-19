import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf_ef62wo.css';
import '../../css/q/qf4j7hobc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf_ef62wo"/><path class="qf4j7hobc"/>`,
		"fallback": "boxicons:calendar-heart",
	});
}

export default Component;
