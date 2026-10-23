import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jqeg_rc5q.css';
import '../../css/g/g3__l4j4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jqeg_rc5q"/><path class="g3__l4j4h"/></g>`,
		"fallback": "vadivam:git-graph",
	});
}

export default Component;
