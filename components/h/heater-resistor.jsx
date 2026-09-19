import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b5ewnxibk.css';
import '../../css/q/q-jxeyn0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect transform="rotate(-45 9.858 29.657)" class="b5ewnxibk"/><path class="q-jxeyn0g"/></g>`,
		"fallback": "icon-park-outline:heater-resistor",
	});
}

export default Component;
