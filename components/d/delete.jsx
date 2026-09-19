import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g0yskbbpp.css';
import '../../css/m/m930bgbyr.css';
import '../../css/k/k397sib8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g0yskbbpp"/><path class="m930bgbyr"/><path class="k397sib8s"/></g>`,
		"fallback": "icon-park-outline:delete",
	});
}

export default Component;
