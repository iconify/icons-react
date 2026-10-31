import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jw8scnbdr.css';
import '../../css/p/pb4s0mydj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jw8scnbdr"/><path class="pb4s0mydj"/></g>`,
		"fallback": "coolicons:factory-duocolor-round",
	});
}

export default Component;
