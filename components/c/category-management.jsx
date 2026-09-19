import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_zapkb4e.css';
import '../../css/b/bzjma2ixc.css';
import '../../css/j/j7bp16hpn.css';
import '../../css/b/bctrsisbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="s_zapkb4e"/><path class="bzjma2ixc"/><circle class="j7bp16hpn"/><circle class="bctrsisbu"/></g>`,
		"fallback": "icon-park-outline:category-management",
	});
}

export default Component;
