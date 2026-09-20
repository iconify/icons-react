import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egh63e3ag.css';
import '../../css/q/q0lpnzbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="egh63e3ag"/><path class="q0lpnzbze"/></g>`,
		"fallback": "tabler:gpu",
	});
}

export default Component;
