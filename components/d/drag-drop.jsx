import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wr2yl5bsj.css';
import '../../css/n/n4qmv4bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wr2yl5bsj"/><path class="n4qmv4bjr"/></g>`,
		"fallback": "tabler:drag-drop",
	});
}

export default Component;
