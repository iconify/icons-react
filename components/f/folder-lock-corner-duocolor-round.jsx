import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7b8nccnb.css';
import '../../css/q/qravvf8eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7b8nccnb"/><path class="qravvf8eg"/></g>`,
		"fallback": "coolicons:folder-lock-corner-duocolor-round",
	});
}

export default Component;
