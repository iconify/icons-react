import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y84nufbts.css';
import '../../css/b/bfkff-g_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y84nufbts"/><path class="bfkff-g_f wm-s"/></g>`,
		"fallback": "withicons:database-backup-solid",
	});
}

export default Component;
