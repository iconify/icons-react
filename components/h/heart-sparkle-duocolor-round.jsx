import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytyv6cciz.css';
import '../../css/s/s262dpztv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ytyv6cciz"/><path class="s262dpztv"/></g>`,
		"fallback": "coolicons:heart-sparkle-duocolor-round",
	});
}

export default Component;
