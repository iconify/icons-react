import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nugocvbqd.css';
import '../../css/f/futcg5bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nugocvbqd"/><path class="futcg5bwj"/></g>`,
		"fallback": "coolicons:ice-cream-duocolor-round",
	});
}

export default Component;
