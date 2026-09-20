import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t06r03bho.css';
import '../../css/t/tmt93k4fe.css';
import '../../css/c/c0f4j5bgw.css';
import '../../css/u/u9byg_bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t06r03bho"/><path class="tmt93k4fe"/><path class="c0f4j5bgw"/><path class="u9byg_bbd"/></g>`,
		"fallback": "streamline-ultimate-color:ads-window",
	});
}

export default Component;
