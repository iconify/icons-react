import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/icxgphbvd.css';
import '../../css/l/ljl27pbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="icxgphbvd"/><path class="ljl27pbaw wm-s"/></g>`,
		"fallback": "withicons:heading-1-solid",
	});
}

export default Component;
