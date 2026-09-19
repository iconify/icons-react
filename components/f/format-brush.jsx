import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edzqosc2g.css';
import '../../css/v/vaa0ik_1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="edzqosc2g"/><path class="vaa0ik_1j"/></g>`,
		"fallback": "icon-park-solid:format-brush",
	});
}

export default Component;
