import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fi43f3bij.css';
import '../../css/o/okvxh899v.css';
import '../../css/b/bqg5_6bqz.css';
import '../../css/c/ckgpe_bsb.css';
import '../../css/w/wh3cslwyk.css';
import '../../css/t/tdffaphfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fi43f3bij"/><path class="okvxh899v"/><path class="bqg5_6bqz"/><path class="ckgpe_bsb"/><path class="wh3cslwyk"/><path class="tdffaphfa"/></g>`,
		"fallback": "icon-park-outline:chart-stock",
	});
}

export default Component;
