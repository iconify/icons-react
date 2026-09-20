import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hc1j5jwuc.css';
import '../../css/k/kmewonbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hc1j5jwuc"/><path class="kmewonbzv"/></g>`,
		"fallback": "streamline-freehand:charging-battery-low-2",
	});
}

export default Component;
