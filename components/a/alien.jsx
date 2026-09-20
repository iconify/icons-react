import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/yof_cwmqx.css';
import '../../css/v/vyx5am_-s.css';
import '../../css/u/u4c8b-0dz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="yof_cwmqx"/><path class="vyx5am_-s"/><path class="u4c8b-0dz"/></g>`,
		"fallback": "streamline-plump:alien",
	});
}

export default Component;
