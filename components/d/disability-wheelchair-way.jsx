import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wqi-mjbpv.css';
import '../../css/n/nprjczblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wqi-mjbpv"/><path class="nprjczblp"/></g>`,
		"fallback": "streamline-freehand:disability-wheelchair-way",
	});
}

export default Component;
