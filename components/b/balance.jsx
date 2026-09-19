import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfne-b7l.css';
import '../../css/z/z-gksw3iv.css';
import '../../css/c/crl6_3vrk.css';
import '../../css/b/bru-ju65v.css';
import '../../css/s/s_-a9rbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nsfne-b7l"><path class="z-gksw3iv"/><path class="crl6_3vrk"/><path class="bru-ju65v"/><path class="s_-a9rbnb"/></g>`,
		"fallback": "icon-park:balance",
	});
}

export default Component;
