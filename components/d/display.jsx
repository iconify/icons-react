import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/saadrlbfd.css';
import '../../css/k/krgim9y4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="saadrlbfd"/><path class="krgim9y4j"/></g>`,
		"fallback": "icon-park-outline:display",
	});
}

export default Component;
