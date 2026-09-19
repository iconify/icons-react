import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vdbd48c3o.css';
import '../../css/b/bopwg-q6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vdbd48c3o"/><path class="bopwg-q6x"/></g>`,
		"fallback": "hugeicons:inequality-circle-02",
	});
}

export default Component;
