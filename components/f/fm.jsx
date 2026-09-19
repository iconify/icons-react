import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vkpgi_38m.css';
import '../../css/x/x3kdk1lns.css';
import '../../css/k/kio-44_ap.css';
import '../../css/s/sghr45v4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="vkpgi_38m"/><path class="x3kdk1lns"/><path class="kio-44_ap"/><path class="sghr45v4q"/></g>`,
		"fallback": "icon-park:fm",
	});
}

export default Component;
