import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ks6fyd39x.css';
import '../../css/o/oo9_wtbyo.css';
import '../../css/a/aa7k_sbzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ks6fyd39x"/><path class="oo9_wtbyo"/><path class="aa7k_sbzz"/></g>`,
		"fallback": "icon-park-outline:broadcast-radio",
	});
}

export default Component;
