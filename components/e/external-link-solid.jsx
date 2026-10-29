import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f68u4f75a.css';
import '../../css/s/sej9ftgtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f68u4f75a"/><path class="sej9ftgtd wm-a"/></g>`,
		"fallback": "withicons:external-link-solid",
	});
}

export default Component;
