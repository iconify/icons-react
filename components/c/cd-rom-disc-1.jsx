import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hq_henbhh.css';
import '../../css/x/xq4sutb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hq_henbhh"/><path class="xq4sutb4m"/></g>`,
		"fallback": "streamline-freehand:cd-rom-disc-1",
	});
}

export default Component;
