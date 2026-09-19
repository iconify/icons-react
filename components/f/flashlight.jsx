import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rw2u32bub.css';
import '../../css/b/bbty7xbeh.css';
import '../../css/n/n-ck6kb3l.css';
import '../../css/c/cwj85ccsx.css';
import '../../css/t/tiqbonweu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="rw2u32bub"/><path class="bbty7xbeh"/><path class="n-ck6kb3l"/><path class="cwj85ccsx"/><path class="tiqbonweu"/></g>`,
		"fallback": "icon-park:flashlight",
	});
}

export default Component;
