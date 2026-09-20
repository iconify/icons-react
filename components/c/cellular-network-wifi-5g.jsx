import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qydxx6b5p.css';
import '../../css/f/fvh-f2b5x.css';
import '../../css/y/ym8xy4bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qydxx6b5p"/><path class="fvh-f2b5x"/><path class="ym8xy4bnq"/></g>`,
		"fallback": "streamline-freehand:cellular-network-wifi-5g",
	});
}

export default Component;
