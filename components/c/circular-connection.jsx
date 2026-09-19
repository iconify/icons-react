import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pr64cbbvx.css';
import '../../css/s/sq8f8ob_o.css';
import '../../css/z/zol00gbcg.css';
import '../../css/v/vstuyi3mi.css';
import '../../css/b/bi98q3btc.css';
import '../../css/t/t86st8bpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="pr64cbbvx"/><path class="sq8f8ob_o"/><path class="zol00gbcg"/><path class="vstuyi3mi"/><path class="bi98q3btc"/><path class="t86st8bpj"/></g>`,
		"fallback": "icon-park:circular-connection",
	});
}

export default Component;
