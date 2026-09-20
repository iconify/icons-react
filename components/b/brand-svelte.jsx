import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6lusqy2k.css';
import '../../css/n/nnxfjbkll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6lusqy2k"/><path class="nnxfjbkll"/></g>`,
		"fallback": "tabler:brand-svelte",
	});
}

export default Component;
