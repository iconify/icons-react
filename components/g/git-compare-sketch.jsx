import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cx7y8abax.css';
import '../../css/y/y3ln0db1m.css';
import '../../css/m/m928-m55s.css';
import '../../css/i/imwl13zcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cx7y8abax wm-k"/><path class="wm-k y3ln0db1m"/><path class="m928-m55s wm-k"/><path class="imwl13zcx wm-a"/></g>`,
		"fallback": "withicons:git-compare-sketch",
	});
}

export default Component;
