import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lf83cxb8z.css';
import '../../css/r/r92b4u03o.css';
import '../../css/d/dvoq2tmyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lf83cxb8z"/><path class="r92b4u03o"/><path class="dvoq2tmyv"/></g>`,
		"fallback": "icon-park-solid:hourglass-null",
	});
}

export default Component;
