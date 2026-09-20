import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/u/u7mrhmbbw.css';
import '../../css/y/y3fy76l-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="u7mrhmbbw"/><path class="y3fy76l-v"/></g>`,
		"fallback": "streamline-plump:button-play-circle",
	});
}

export default Component;
