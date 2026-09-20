import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/uc6z-9b_l.css';
import '../../css/e/etknfunhc.css';
import '../../css/i/ifvqnmboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="uc6z-9b_l"/><path class="etknfunhc"/><path class="ifvqnmboq"/></g>`,
		"fallback": "streamline-sharp-color:browser-build",
	});
}

export default Component;
