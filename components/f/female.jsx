import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qaw86tb4j.css';
import '../../css/o/ogc7ubbfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qaw86tb4j"/><path class="ogc7ubbfh"/></g>`,
		"fallback": "icon-park-outline:female",
	});
}

export default Component;
