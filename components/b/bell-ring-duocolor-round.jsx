import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbtlwbt1k.css';
import '../../css/c/cvm5lxb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qbtlwbt1k"/><path class="cvm5lxb8r"/></g>`,
		"fallback": "coolicons:bell-ring-duocolor-round",
	});
}

export default Component;
