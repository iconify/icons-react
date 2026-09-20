import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fo7dwf4dh.css';
import '../../css/e/ei1y8fbbq.css';
import '../../css/u/uy1c0w2vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fo7dwf4dh"/><path class="ei1y8fbbq"/><path class="uy1c0w2vt"/></g>`,
		"fallback": "tabler:cherry",
	});
}

export default Component;
