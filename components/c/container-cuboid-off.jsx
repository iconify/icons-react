import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvw0xt-wk.css';
import '../../css/r/rf23-cbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvw0xt-wk"/><path class="rf23-cbaf"/></g>`,
		"fallback": "andrsrxn:container-cuboid-off",
	});
}

export default Component;
