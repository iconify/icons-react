import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-_4k2qhq.css';
import '../../css/g/gfm_mc64v.css';
import '../../css/l/lzfphrbkl.css';
import '../../css/u/ug1h7unws.css';
import '../../css/l/l1nv2jw8y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-_4k2qhq"/><path class="gfm_mc64v"/><path class="lzfphrbkl"/><path class="ug1h7unws"/><path class="l1nv2jw8y"/></g>`,
		"fallback": "streamline-color:graduation-cap",
	});
}

export default Component;
