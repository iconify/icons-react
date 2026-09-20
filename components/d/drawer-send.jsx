import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogcr5xepy.css';
import '../../css/g/gyx8j7b3u.css';
import '../../css/e/ed7t49f5s.css';
import '../../css/u/u4yl8q-wn.css';
import '../../css/b/b-lww1b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogcr5xepy"/><path class="gyx8j7b3u"/><path class="ed7t49f5s"/><path class="u4yl8q-wn"/><path class="b-lww1b_m"/></g>`,
		"fallback": "streamline-ultimate-color:drawer-send",
	});
}

export default Component;
