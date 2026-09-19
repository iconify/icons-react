import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/f/f6mlyysyg.css';
import '../../css/o/o0zhe9cbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="f6mlyysyg"/><rect class="o0zhe9cbg"/></g>`,
		"fallback": "icon-park-outline:astonished-face",
	});
}

export default Component;
