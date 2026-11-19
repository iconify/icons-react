import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yst6o6bek.css';
import '../../css/r/ru78nubsm.css';
import '../../css/p/pnpsnyk9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yst6o6bek"/><path clip-rule="evenodd" class="ru78nubsm"/><path class="pnpsnyk9r"/></g>`,
		"fallback": "andrsrxn:chart-mean",
	});
}

export default Component;
