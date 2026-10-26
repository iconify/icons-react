import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/c069sbycb.css';
import '../../css/d/d333rm8lz.css';
import '../../css/a/a4vwu3-fb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="c069sbycb"/><path class="d333rm8lz"/><path class="a4vwu3-fb"/></g>`,
		"fallback": "doodle-icons:fish",
	});
}

export default Component;
