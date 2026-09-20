import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/r/rrfe6rbol.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/x/xhgvo6bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><path class="rrfe6rbol"/><circle class="h_tsn8bxt"/><path class="xhgvo6bxh"/></g>`,
		"fallback": "lucide:disc-3",
	});
}

export default Component;
