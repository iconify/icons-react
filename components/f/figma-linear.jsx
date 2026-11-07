import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dd5riuc8l.css';
import '../../css/a/a7_qblosi.css';
import '../../css/o/oz2d1bb3e.css';
import '../../css/k/kivsy5bkl.css';
import '../../css/j/jehd3zbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dd5riuc8l"/><path class="a7_qblosi"/><path class="oz2d1bb3e"/><path class="kivsy5bkl"/><path class="jehd3zbqn"/></g>`,
		"fallback": "solar:figma-linear",
	});
}

export default Component;
