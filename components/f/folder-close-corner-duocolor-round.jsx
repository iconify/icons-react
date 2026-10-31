import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l9ycfeb_j.css';
import '../../css/q/qravvf8eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l9ycfeb_j"/><path class="qravvf8eg"/></g>`,
		"fallback": "coolicons:folder-close-corner-duocolor-round",
	});
}

export default Component;
