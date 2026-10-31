import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/olhcq-bcp.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="olhcq-bcp wm-k"/><path class="wm-s xnodzworh"/></g>`,
		"fallback": "withicons:image-off-gloss",
	});
}

export default Component;
