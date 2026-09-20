import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wk54p5bjl.css';
import '../../css/c/cgfsm2bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wk54p5bjl"/><path class="cgfsm2bzr"/></g>`,
		"fallback": "tabler:clock-search",
	});
}

export default Component;
