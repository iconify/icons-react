import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i1n-2lblk.css';
import '../../css/x/xzltmb76k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i1n-2lblk wm-k"/><path class="wm-s xzltmb76k"/></g>`,
		"fallback": "withicons:cloud-upload-gloss",
	});
}

export default Component;
