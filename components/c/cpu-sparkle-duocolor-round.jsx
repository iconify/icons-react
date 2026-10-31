import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pie5oxg6b.css';
import '../../css/d/d5ernoeir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pie5oxg6b"/><path class="d5ernoeir"/></g>`,
		"fallback": "coolicons:cpu-sparkle-duocolor-round",
	});
}

export default Component;
