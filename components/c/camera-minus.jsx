import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6ddfyb3p.css';
import '../../css/l/lxldchbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6ddfyb3p"/><path class="lxldchbuw"/></g>`,
		"fallback": "tabler:camera-minus",
	});
}

export default Component;
