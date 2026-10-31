import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ox-pnccwg.css';
import '../../css/k/kxkp72b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ox-pnccwg"/><path class="kxkp72b-i"/></g>`,
		"fallback": "coolicons:headset-duocolor-round",
	});
}

export default Component;
