import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/g/gmn26m0eu.css';
import '../../css/q/qtq5x3s7v.css';
import '../../css/b/bpc-esnpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rcdfnub0v"/><path class="gmn26m0eu"/><path class="qtq5x3s7v"/><path class="bpc-esnpg"/></g>`,
		"fallback": "andrsrxn:device-pc-image",
	});
}

export default Component;
