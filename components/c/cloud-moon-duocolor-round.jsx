import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cs1aaub6s.css';
import '../../css/b/bktblbcwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cs1aaub6s"/><path class="bktblbcwj"/></g>`,
		"fallback": "coolicons:cloud-moon-duocolor-round",
	});
}

export default Component;
