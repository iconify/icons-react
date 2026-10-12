import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjehjfbxn.css';
import '../../css/j/jfuyabcyh.css';
import '../../css/s/s2ll1nrng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gjehjfbxn"/><ellipse transform="rotate(90 10.07 12)" class="jfuyabcyh"/><path class="s2ll1nrng"/></g>`,
		"fallback": "andrsrxn:coin",
	});
}

export default Component;
