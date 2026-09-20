import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmld65ztq.css';
import '../../css/w/wmdw31bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmld65ztq"/><path class="wmdw31bzf"/></g>`,
		"fallback": "tabler:assembly",
	});
}

export default Component;
