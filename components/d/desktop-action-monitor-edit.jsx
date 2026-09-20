import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ug-00_bpc.css';
import '../../css/s/sjcr8jyry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ug-00_bpc"/><path class="sjcr8jyry"/></g>`,
		"fallback": "streamline-freehand:desktop-action-monitor-edit",
	});
}

export default Component;
