import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uuheow30q.css';
import '../../css/q/qxcfuszic.css';
import '../../css/n/n5pbi4u5l.css';
import '../../css/n/naq3n-bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uuheow30q"/><circle transform="matrix(-1 0 0 1 20.5 2)" class="qxcfuszic"/><path class="n5pbi4u5l"/><path class="naq3n-bhk"/></g>`,
		"fallback": "hugeicons:globe",
	});
}

export default Component;
