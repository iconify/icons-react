import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w4twh_sgx.css';
import '../../css/a/agh84lb_e.css';
import '../../css/r/rx9x-xbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w4twh_sgx"/><path class="agh84lb_e"/><path class="rx9x-xbiv"/></g>`,
		"fallback": "streamline-freehand:board-game-chess-figures",
	});
}

export default Component;
