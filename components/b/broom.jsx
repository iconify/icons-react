import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5-aelbcw.css';
import '../../css/n/n4b98qw6q.css';
import '../../css/h/hwj8q4bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5-aelbcw"/><path class="n4b98qw6q"/><path class="hwj8q4bvr"/></g>`,
		"fallback": "andrsrxn:broom",
	});
}

export default Component;
