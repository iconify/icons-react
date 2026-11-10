import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m76y4kbws.css';
import '../../css/o/oeehe4rmq.css';
import '../../css/m/m55spibvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m76y4kbws"/><path class="oeehe4rmq"/><path class="m55spibvx"/></g>`,
		"fallback": "andrsrxn:file-7z",
	});
}

export default Component;
