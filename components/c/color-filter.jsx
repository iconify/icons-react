import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/eum0i25rl.css';
import '../../css/p/p5fn7zxfk.css';
import '../../css/t/t4t7tr-mz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="eum0i25rl"/><path class="p5fn7zxfk"/><path class="t4t7tr-mz"/></g>`,
		"fallback": "icon-park-solid:color-filter",
	});
}

export default Component;
