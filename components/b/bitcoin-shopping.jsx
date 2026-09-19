import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wkje7hb8n.css';
import '../../css/p/pg7s9yb5j.css';
import '../../css/q/qozo6tb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wkje7hb8n"/><path class="pg7s9yb5j"/><path class="qozo6tb2l"/></g>`,
		"fallback": "hugeicons:bitcoin-shopping",
	});
}

export default Component;
