import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_7ru2bie.css';
import '../../css/r/rqab73f1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q_7ru2bie"/><path class="rqab73f1y"/></g>`,
		"fallback": "tabler:inner-shadow-top",
	});
}

export default Component;
