import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rqg21wbtn.css';
import '../../css/h/hbbh8abmi.css';
import '../../css/p/p5f3lmg3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rqg21wbtn"/><path class="hbbh8abmi"/><path class="p5f3lmg3i"/></g>`,
		"fallback": "hugeicons:insert-row-up",
	});
}

export default Component;
