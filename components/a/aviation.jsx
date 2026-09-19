import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uisjjab3n.css';
import '../../css/f/frhsgi1-e.css';
import '../../css/m/mdagr1bqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uisjjab3n"/><path class="frhsgi1-e"/><path class="mdagr1bqs"/></g>`,
		"fallback": "icon-park-outline:aviation",
	});
}

export default Component;
