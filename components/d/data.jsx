import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lnqi0grko.css';
import '../../css/s/sd9f6hv3q.css';
import '../../css/q/qhs-1kczd.css';
import '../../css/z/z4-koub6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lnqi0grko"/><path class="sd9f6hv3q"/><path class="qhs-1kczd"/><ellipse class="z4-koub6k"/></g>`,
		"fallback": "icon-park:data",
	});
}

export default Component;
