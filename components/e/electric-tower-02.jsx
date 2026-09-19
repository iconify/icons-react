import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/objfwp1iv.css';
import '../../css/a/ao1eykxlw.css';
import '../../css/h/hod5p82lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="objfwp1iv"/><path class="ao1eykxlw"/><path class="hod5p82lh"/></g>`,
		"fallback": "hugeicons:electric-tower-02",
	});
}

export default Component;
