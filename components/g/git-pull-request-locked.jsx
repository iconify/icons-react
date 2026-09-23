import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pj2w0xbfe.css';
import '../../css/q/q-784mrbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pj2w0xbfe"/><path class="q-784mrbe"/></g>`,
		"fallback": "tabler:git-pull-request-locked",
	});
}

export default Component;
