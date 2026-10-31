import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ujh-70bha.css';
import '../../css/g/g_s1zftyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ujh-70bha"/><path class="g_s1zftyp"/></g>`,
		"fallback": "coolicons:fold-horizontal-duocolor-round",
	});
}

export default Component;
