import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcjd383lz.css';
import '../../css/o/ot9nfubut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lcjd383lz"/><path class="ot9nfubut"/></g>`,
		"fallback": "coolicons:git-pull-request-closed-duocolor-round",
	});
}

export default Component;
