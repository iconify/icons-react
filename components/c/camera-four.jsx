import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/ruz3jronq.css';
import '../../css/o/o7-mq32hy.css';
import '../../css/z/zkju8wbbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ruz3jronq"/><path class="o7-mq32hy"/><path class="zkju8wbbf"/></g>`,
		"fallback": "icon-park-solid:camera-four",
	});
}

export default Component;
