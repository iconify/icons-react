import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xgkzzfbsj.css';
import '../../css/d/d0n_v7bsp.css';
import '../../css/c/cyyy03bfw.css';
import '../../css/e/eixdubbhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xgkzzfbsj"/><path class="d0n_v7bsp"/><path class="cyyy03bfw"/><path class="eixdubbhy"/></g>`,
		"fallback": "streamline-plump-color:fill-and-sign",
	});
}

export default Component;
