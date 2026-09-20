import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ens04999i.css';
import '../../css/n/n_xfstkmc.css';
import '../../css/h/h03pgbcln.css';
import '../../css/m/mntmc0b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ens04999i"/><path class="n_xfstkmc"/><path class="h03pgbcln"/><path class="mntmc0b2z"/>`,
		"fallback": "stash:image-open",
	});
}

export default Component;
