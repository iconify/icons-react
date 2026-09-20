import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/ggamq8hbq.css';
import '../../css/n/n0al0ac-d.css';
import '../../css/y/y5exvutsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ggamq8hbq"/><path class="n0al0ac-d"/><path class="y5exvutsk"/></g>`,
		"fallback": "streamline-plump-color:flip-horizontal-circle-1",
	});
}

export default Component;
