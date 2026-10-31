import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/odh-gj0dg.css';
import '../../css/n/nkoja3b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="odh-gj0dg"/><path class="nkoja3b2g"/></g>`,
		"fallback": "coolicons:feather-duocolor-round",
	});
}

export default Component;
