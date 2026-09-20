import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxrostbfo.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/x/x1rqnf35i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sxrostbfo"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="x1rqnf35i"/></g>`,
		"fallback": "solar:battery-low-minimalistic-outline",
	});
}

export default Component;
