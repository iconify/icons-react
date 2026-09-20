import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqh2cc_5k.css';
import '../../css/u/uvnhfub8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqh2cc_5k"/><path class="uvnhfub8g"/></g>`,
		"fallback": "tabler:cake",
	});
}

export default Component;
