import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ah1-71w6y.css';
import '../../css/e/eqa9_wbcm.css';
import '../../css/u/uj_c58bnb.css';
import '../../css/w/w-fhtw6wb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ah1-71w6y"/><path class="eqa9_wbcm"/><path class="uj_c58bnb"/><path class="w-fhtw6wb"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-oval-notification",
	});
}

export default Component;
