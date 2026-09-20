import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8nc_j7iv.css';
import '../../css/b/b2t-tzb3i.css';
import '../../css/w/w44vulk8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8nc_j7iv"/><path class="b2t-tzb3i"/><path class="w44vulk8k"/></g>`,
		"fallback": "tabler:clock-bitcoin",
	});
}

export default Component;
