import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-847bcbd.css';
import '../../css/q/q1mq1r_ft.css';
import '../../css/u/u4hrt40ee.css';
import '../../css/h/hmkhhrbss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g-847bcbd"/><path class="q1mq1r_ft"/><path class="u4hrt40ee"/><path class="hmkhhrbss"/></g>`,
		"fallback": "icon-park-outline:green-new-energy",
	});
}

export default Component;
