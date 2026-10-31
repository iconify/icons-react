import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f77qxutat.css';
import '../../css/f/f1xa8sbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f77qxutat"/><path class="f1xa8sbih"/></g>`,
		"fallback": "coolicons:carrot-duocolor-round",
	});
}

export default Component;
