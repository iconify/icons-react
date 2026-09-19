import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bmvtfmy4l.css';
import '../../css/z/zut5arb6z.css';
import '../../css/w/wuim45b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bmvtfmy4l"/><path class="zut5arb6z"/><path class="wuim45b6m"/></g>`,
		"fallback": "hugeicons:doctor-01",
	});
}

export default Component;
