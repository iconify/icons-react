import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kigccwb1y.css';
import '../../css/p/plk5hxblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kigccwb1y"/><path class="plk5hxblf"/></g>`,
		"fallback": "tabler:clock-edit",
	});
}

export default Component;
