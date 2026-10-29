import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v--q92aev.css';
import '../../css/i/ir6haibsd.css';
import '../../css/g/gorsochjg.css';
import '../../css/q/qy6s686ad.css';
import '../../css/y/yatyg0v9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v--q92aev"/><path class="ir6haibsd wm-shadow"/><path class="gorsochjg"/><path class="qy6s686ad"/><path class="yatyg0v9y"/></g>`,
		"fallback": "withicons:git-pull-request-engrave",
	});
}

export default Component;
