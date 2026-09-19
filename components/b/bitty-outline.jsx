import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/o/or_e2fe0o.css';
import '../../css/b/bjbn9291n.css';
import '../../css/e/e-vhv53hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="xglklabzt"/><circle class="or_e2fe0o"/><circle class="bjbn9291n"/><path class="e-vhv53hm"/></g>`,
		"fallback": "bitcoin-icons:bitty-outline",
	});
}

export default Component;
