import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc0bwix8q.css';
import '../../css/v/vl9e-cc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hc0bwix8q"/><path class="vl9e-cc6x"/></g>`,
		"fallback": "tabler:code-circle-2",
	});
}

export default Component;
