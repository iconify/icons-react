import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkhnd7b5a.css';
import '../../css/o/oybf8rw1o.css';
import '../../css/g/gzy1edjps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkhnd7b5a"/><path class="oybf8rw1o"/><path class="gzy1edjps"/></g>`,
		"fallback": "andrsrxn:headset",
	});
}

export default Component;
