import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wal7ho3rf.css';
import '../../css/v/v6hl1hb8w.css';
import '../../css/o/otljbkb5n.css';
import '../../css/x/xtyxypbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wal7ho3rf"/><path class="v6hl1hb8w"/><path class="otljbkb5n"/><path class="xtyxypbue"/></g>`,
		"fallback": "hugeicons:arrange",
	});
}

export default Component;
