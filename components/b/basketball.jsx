import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swj900r3s.css';
import '../../css/f/fgj7xbclm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swj900r3s"/><path class="fgj7xbclm"/></g>`,
		"fallback": "andrsrxn:basketball",
	});
}

export default Component;
