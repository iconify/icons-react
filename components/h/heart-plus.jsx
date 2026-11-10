import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxxq40pke.css';
import '../../css/x/x68shjbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxxq40pke"/><path class="x68shjbsa"/></g>`,
		"fallback": "andrsrxn:heart-plus",
	});
}

export default Component;
