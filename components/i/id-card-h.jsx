import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/b/b2ktnsflo.css';
import '../../css/l/lurmblhlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="wzzwdrbyq"/><path class="b2ktnsflo"/><path class="lurmblhlw"/></g>`,
		"fallback": "icon-park-solid:id-card-h",
	});
}

export default Component;
