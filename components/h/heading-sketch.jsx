import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rppywc_mp.css';
import '../../css/q/q272iccrr.css';
import '../../css/g/gjkr0gbmj.css';
import '../../css/j/jqsbxnbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rppywc_mp wm-k"/><path class="q272iccrr wm-a"/><path class="gjkr0gbmj wm-k"/><path class="jqsbxnbrn wm-a"/></g>`,
		"fallback": "withicons:heading-sketch",
	});
}

export default Component;
