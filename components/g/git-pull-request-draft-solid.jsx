import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d7nxfmbgr.css';
import '../../css/z/zy0b3cbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d7nxfmbgr"/><path class="wm-a zy0b3cbwc"/></g>`,
		"fallback": "withicons:git-pull-request-draft-solid",
	});
}

export default Component;
