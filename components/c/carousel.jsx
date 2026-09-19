import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/db8sf0adu.css';
import '../../css/c/c0qwhllti.css';
import '../../css/o/oq2jbxbhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="db8sf0adu"/><path class="c0qwhllti"/><path class="oq2jbxbhn"/></g>`,
		"fallback": "icon-park-outline:carousel",
	});
}

export default Component;
