import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8b23fbyc.css';
import '../../css/d/diru-nb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8b23fbyc"/><path class="diru-nb9a"/></g>`,
		"fallback": "coolicons:align-left-duocolor-round",
	});
}

export default Component;
