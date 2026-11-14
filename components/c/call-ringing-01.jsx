import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vl95o3b3u.css';
import '../../css/h/hy1izb-rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vl95o3b3u"/><path class="hy1izb-rv"/></g>`,
		"fallback": "hugeicons:call-ringing-01",
	});
}

export default Component;
