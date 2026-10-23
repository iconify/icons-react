import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cj1po-b3t.css';
import '../../css/z/z3j_facfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cj1po-b3t"/><path class="z3j_facfq"/></g>`,
		"fallback": "vadivam:calendar-sync",
	});
}

export default Component;
