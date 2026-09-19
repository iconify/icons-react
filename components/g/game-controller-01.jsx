import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owwyehbtl.css';
import '../../css/b/bj61-muiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="owwyehbtl"/><path class="bj61-muiw"/></g>`,
		"fallback": "hugeicons:game-controller-01",
	});
}

export default Component;
