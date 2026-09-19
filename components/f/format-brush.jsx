import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uf96k7bux.css';
import '../../css/v/vaa0ik_1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uf96k7bux"/><path class="vaa0ik_1j"/></g>`,
		"fallback": "icon-park-outline:format-brush",
	});
}

export default Component;
