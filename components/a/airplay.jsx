import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2x7zcb7n.css';
import '../../css/v/vwleoby9d.css';
import '../../css/z/z6hqqwbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2x7zcb7n"/><path class="vwleoby9d"/><path class="z6hqqwbjl"/></g>`,
		"fallback": "andrsrxn:airplay",
	});
}

export default Component;
