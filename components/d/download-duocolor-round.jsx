import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riisj1nkm.css';
import '../../css/t/tp9nqccpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="riisj1nkm"/><path class="tp9nqccpz"/></g>`,
		"fallback": "coolicons:download-duocolor-round",
	});
}

export default Component;
