import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zyy2bot8x.css';
import '../../css/a/a0w-h3bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zyy2bot8x"/><path class="a0w-h3bsp"/></g>`,
		"fallback": "streamline-freehand:cloud-error-404",
	});
}

export default Component;
