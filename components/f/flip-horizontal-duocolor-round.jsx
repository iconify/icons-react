import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tsieg8bwa.css';
import '../../css/t/t0tp3ab2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tsieg8bwa"/><path class="t0tp3ab2x"/></g>`,
		"fallback": "coolicons:flip-horizontal-duocolor-round",
	});
}

export default Component;
