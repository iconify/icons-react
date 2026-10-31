import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ky40s1frt.css';
import '../../css/z/z9g2aviji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ky40s1frt"/><path class="z9g2aviji"/></g>`,
		"fallback": "coolicons:apple-duocolor-round",
	});
}

export default Component;
