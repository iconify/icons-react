import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo3oojd-t.css';
import '../../css/h/hf0e6cbjv.css';
import '../../css/n/n0umv9b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo3oojd-t"/><path class="hf0e6cbjv"/><path class="n0umv9b6l"/></g>`,
		"fallback": "andrsrxn:earth",
	});
}

export default Component;
