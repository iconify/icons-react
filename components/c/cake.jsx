import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fchudbk6e.css';
import '../../css/r/rzh-h5b-q.css';
import '../../css/j/j0t7w90yd.css';
import '../../css/x/x6uf6pbly.css';
import '../../css/p/p4bf15bjt.css';
import '../../css/m/mmij5sbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fchudbk6e"/><path class="rzh-h5b-q"/><path class="j0t7w90yd"/><path class="x6uf6pbly"/><path class="p4bf15bjt"/><path class="mmij5sbik"/></g>`,
		"fallback": "streamline-sharp-color:cake",
	});
}

export default Component;
