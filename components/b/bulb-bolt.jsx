import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kismkwb2y.css';
import '../../css/g/gper39pxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kismkwb2y"/><path class="gper39pxv"/></g>`,
		"fallback": "reicon:bulb-bolt",
	});
}

export default Component;
