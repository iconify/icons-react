import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zg157qnlc.css';
import '../../css/y/y57rr7b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zg157qnlc"/><path class="y57rr7b-a"/></g>`,
		"fallback": "keyline-icons:baby-2-boy-two-tone",
	});
}

export default Component;
