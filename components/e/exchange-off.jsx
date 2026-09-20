import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x150v0i1o.css';
import '../../css/w/w9a0eu47k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x150v0i1o"/><path class="w9a0eu47k"/></g>`,
		"fallback": "tabler:exchange-off",
	});
}

export default Component;
