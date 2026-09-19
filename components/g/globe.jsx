import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/t/tujdn6tkq.css';
import '../../css/c/cfrkwie2s.css';
import '../../css/g/g161dj_5o.css';
import '../../css/x/xoaq8s_5h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><circle class="tujdn6tkq"/><path class="cfrkwie2s"/><path class="g161dj_5o"/><path class="xoaq8s_5h"/></g>`,
		"fallback": "gala:globe",
	});
}

export default Component;
