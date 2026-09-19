import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/k44umgs5h.css';
import '../../css/m/mrpvzrb1u.css';
import '../../css/n/n4_dgpclb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="k44umgs5h"/><path class="mrpvzrb1u"/><path class="n4_dgpclb"/></g>`,
		"fallback": "flag:gn-1x1",
	});
}

export default Component;
