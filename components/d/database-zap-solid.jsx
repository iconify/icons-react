import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hr4djz4bo.css';
import '../../css/y/ywmhit_5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hr4djz4bo"/><path class="wm-s ywmhit_5k"/></g>`,
		"fallback": "withicons:database-zap-solid",
	});
}

export default Component;
