import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyzhte5br.css';
import '../../css/i/iq5vpwbzm.css';
import '../../css/h/hi66og4ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyzhte5br"/><path class="iq5vpwbzm"/><path class="hi66og4ic"/></g>`,
		"fallback": "andrsrxn:bookmarks",
	});
}

export default Component;
