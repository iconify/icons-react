import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s9avtu-0g.css';
import '../../css/o/okvxh899v.css';
import '../../css/g/gor4wbcao.css';
import '../../css/c/ckgpe_bsb.css';
import '../../css/t/tq-bhxbxu.css';
import '../../css/t/tdffaphfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="s9avtu-0g"/><path class="okvxh899v"/><path class="gor4wbcao"/><path class="ckgpe_bsb"/><path class="tq-bhxbxu"/><path class="tdffaphfa"/></g>`,
		"fallback": "icon-park-solid:chart-stock",
	});
}

export default Component;
