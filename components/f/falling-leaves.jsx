import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/d3r56zbao.css';
import '../../css/z/zf8nsvb4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="d3r56zbao"/><path class="zf8nsvb4g"/></g>`,
		"fallback": "doodle-icons:falling-leaves",
	});
}

export default Component;
