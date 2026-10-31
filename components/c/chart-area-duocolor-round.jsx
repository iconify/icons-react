import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zyqlyotss.css';
import '../../css/c/cmls3oiey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zyqlyotss"/><path class="cmls3oiey"/></g>`,
		"fallback": "coolicons:chart-area-duocolor-round",
	});
}

export default Component;
