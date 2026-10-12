import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibdu96b1j.css';
import '../../css/b/bck25d51j.css';
import '../../css/f/f1w0ku3yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 9.93 4.31)" class="ibdu96b1j"/><rect transform="rotate(45 10.28 4.67)" class="bck25d51j"/><path class="f1w0ku3yn"/></g>`,
		"fallback": "andrsrxn:cleaning-brush",
	});
}

export default Component;
