import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/d/ddzidijwh.css';
import '../../css/w/w63pqzbel.css';
import '../../css/f/fzxfsm2kx.css';
import '../../css/u/uuxim2s9b.css';
import '../../css/q/qgm6ncb5m.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="ddzidijwh"/><path class="w63pqzbel"/><path class="fzxfsm2kx"/><path class="uuxim2s9b"/><path class="qgm6ncb5m"/><path class="t4qaumccy"/></g>`,
		"fallback": "solar:file-figma-broken",
	});
}

export default Component;
