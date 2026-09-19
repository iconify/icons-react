import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jra_7pbua.css';
import '../../css/z/z87tfbcrq.css';
import '../../css/y/yzxj7cccj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jra_7pbua"/><path class="z87tfbcrq"/><path class="yzxj7cccj"/></g>`,
		"fallback": "icon-park-outline:creative",
	});
}

export default Component;
