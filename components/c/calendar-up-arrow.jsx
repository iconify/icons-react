import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf_ef62wo.css';
import '../../css/f/fp-m6zb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf_ef62wo"/><path class="fp-m6zb-z"/>`,
		"fallback": "boxicons:calendar-up-arrow",
	});
}

export default Component;
