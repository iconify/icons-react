import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n_yw4cbyo.css';
import '../../css/l/lo1t6cv8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n_yw4cbyo"/><path class="lo1t6cv8s wm-a"/></g>`,
		"fallback": "withicons:apple-solid",
	});
}

export default Component;
