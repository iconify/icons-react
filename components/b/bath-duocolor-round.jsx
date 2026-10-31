import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8j-a8bir.css';
import '../../css/u/u9b-9843x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g8j-a8bir"/><path class="u9b-9843x"/></g>`,
		"fallback": "coolicons:bath-duocolor-round",
	});
}

export default Component;
