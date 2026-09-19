import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/x/xs-8rkxht.css';
import '../../css/l/lurmblhlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="wzzwdrbyq"/><path class="xs-8rkxht"/><path class="lurmblhlw"/></g>`,
		"fallback": "icon-park-outline:id-card-h",
	});
}

export default Component;
