import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxst6bmqz.css';
import '../../css/f/fgt6osbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xxst6bmqz"/><path class="fgt6osbrk"/></g>`,
		"fallback": "coolicons:bird-duocolor-round",
	});
}

export default Component;
