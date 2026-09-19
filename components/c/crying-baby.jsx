import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nzlj35b2s.css';
import '../../css/m/mhsmvbuqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nzlj35b2s"/><path class="mhsmvbuqt"/></g>`,
		"fallback": "icon-park-outline:crying-baby",
	});
}

export default Component;
