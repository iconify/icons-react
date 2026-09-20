import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u791mbc2b.css';
import '../../css/g/glaxh1b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u791mbc2b"/><path class="glaxh1b0z"/></g>`,
		"fallback": "majesticons:image-multiple-line",
	});
}

export default Component;
