import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nzlj35b2s.css';
import '../../css/x/x020qsbsu.css';
import '../../css/n/n4bdwrb1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nzlj35b2s"/><path class="x020qsbsu"/><path class="n4bdwrb1l"/></g>`,
		"fallback": "icon-park-outline:baby-taste",
	});
}

export default Component;
