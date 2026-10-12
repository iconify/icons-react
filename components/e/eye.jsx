import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcf1-0buu.css';
import '../../css/w/wuqexrxfk.css';
import '../../css/j/jplz2vvke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zcf1-0buu"/><path class="wuqexrxfk"/><circle class="jplz2vvke"/></g>`,
		"fallback": "andrsrxn:eye",
	});
}

export default Component;
