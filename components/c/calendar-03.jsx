import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6b-pdb0n.css';
import '../../css/t/ttsc4cc4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6b-pdb0n"/><path class="ttsc4cc4q"/></g>`,
		"fallback": "hugeicons:calendar-03",
	});
}

export default Component;
