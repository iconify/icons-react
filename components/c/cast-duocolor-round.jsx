import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c0nl5isdz.css';
import '../../css/w/w8nrjub_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c0nl5isdz"/><path class="w8nrjub_x"/></g>`,
		"fallback": "coolicons:cast-duocolor-round",
	});
}

export default Component;
