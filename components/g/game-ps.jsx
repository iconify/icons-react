import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sae-ct9bb.css';
import '../../css/a/aeyefqb0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sae-ct9bb"/><path class="aeyefqb0j"/></g>`,
		"fallback": "icon-park-outline:game-ps",
	});
}

export default Component;
