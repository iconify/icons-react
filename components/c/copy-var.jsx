import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dhgyshb7n.css';
import '../../css/u/uhxzdvbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dhgyshb7n"/><path class="uhxzdvbdl"/></g>`,
		"fallback": "proicons:copy-var",
	});
}

export default Component;
