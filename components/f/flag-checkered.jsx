import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fpglqv-gs.css';
import '../../css/t/t9pcyccbw.css';
import '../../css/j/jy8q_ab6y.css';
import '../../css/d/dnk0jsb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fpglqv-gs"/><path class="t9pcyccbw"/><path class="jy8q_ab6y"/><path class="dnk0jsb5i"/></g>`,
		"fallback": "withicons-bauhaus:flag-checkered",
	});
}

export default Component;
