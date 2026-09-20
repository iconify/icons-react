import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ost_9eacq.css';
import '../../css/s/sm31vghrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ost_9eacq"/><path class="sm31vghrv"/></g>`,
		"fallback": "tabler:blend-mode",
	});
}

export default Component;
