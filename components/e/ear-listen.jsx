import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmne_ejio.css';
import '../../css/b/bsgix6bfy.css';
import '../../css/s/sg57bup9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmne_ejio"/><path class="bsgix6bfy"/><path class="sg57bup9g"/></g>`,
		"fallback": "andrsrxn:ear-listen",
	});
}

export default Component;
