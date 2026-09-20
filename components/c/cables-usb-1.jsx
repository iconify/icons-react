import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r3xfls66p.css';
import '../../css/g/gu12tacfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r3xfls66p"/><path class="gu12tacfe"/></g>`,
		"fallback": "streamline-freehand:cables-usb-1",
	});
}

export default Component;
