import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/arzdxab4s.css';
import '../../css/r/r6-zig0wd.css';
import '../../css/u/uihgw98am.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="arzdxab4s"/><path class="r6-zig0wd"/><path class="uihgw98am"/></g>`,
		"fallback": "icon-park-outline:calculator",
	});
}

export default Component;
