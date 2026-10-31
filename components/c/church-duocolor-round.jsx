import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ohdwadw8m.css';
import '../../css/v/vrmgln8ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ohdwadw8m"/><path class="vrmgln8ck"/></g>`,
		"fallback": "coolicons:church-duocolor-round",
	});
}

export default Component;
