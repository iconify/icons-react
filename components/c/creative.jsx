import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f_gjtjbcv.css';
import '../../css/x/x-ekx3b1l.css';
import '../../css/t/twe32ssqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="f_gjtjbcv"/><path class="x-ekx3b1l"/><path class="twe32ssqr"/></g>`,
		"fallback": "icon-park:creative",
	});
}

export default Component;
