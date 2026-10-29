import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/etzt8li8p.css';
import '../../css/l/lv9qmw66s.css';
import '../../css/q/q0mlcsbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="etzt8li8p wm-a"/><path class="lv9qmw66s wm-k"/><path class="q0mlcsbte wm-a"/></g>`,
		"fallback": "withicons:chart-candlestick-sketch",
	});
}

export default Component;
