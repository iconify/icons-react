import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z2z8s690m.css';
import '../../css/d/dlenz_bwo.css';
import '../../css/s/stb41lb3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="z2z8s690m"/><path class="dlenz_bwo"/><path class="stb41lb3k"/></g>`,
		"fallback": "icon-park:harm",
	});
}

export default Component;
