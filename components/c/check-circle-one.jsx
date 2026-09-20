import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptmjsvbcs.css';
import '../../css/r/r3yep8gbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ptmjsvbcs"/><path class="r3yep8gbg"/></g>`,
		"fallback": "mynaui:check-circle-one",
	});
}

export default Component;
