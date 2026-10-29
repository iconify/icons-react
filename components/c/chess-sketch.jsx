import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v1xl4fjpl.css';
import '../../css/v/vnwe1ttqq.css';
import '../../css/l/lawrsyelz.css';
import '../../css/e/e2kk_lgwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v1xl4fjpl"/><path class="vnwe1ttqq wm-k"/><path class="lawrsyelz wm-k"/><path class="e2kk_lgwx wm-a"/></g>`,
		"fallback": "withicons:chess-sketch",
	});
}

export default Component;
