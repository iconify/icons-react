import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pu51xlbah.css';
import '../../css/f/f7e0yac4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pu51xlbah"/><path class="f7e0yac4b"/></g>`,
		"fallback": "coolicons:gitlab-duocolor-round",
	});
}

export default Component;
