import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cw-iw1_ie.css';
import '../../css/i/im6flx-ax.css';
import '../../css/z/z-phgabtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="cw-iw1_ie"/><path class="im6flx-ax"/><path class="z-phgabtr"/></g>`,
		"fallback": "icon-park:ghost",
	});
}

export default Component;
