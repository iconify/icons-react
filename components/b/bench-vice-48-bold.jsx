import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs-1v6bed.css';
import '../../css/x/x4a8ysb7l.css';
import '../../css/w/wkchaul0v.css';
import '../../css/d/dw16-vbkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs-1v6bed"/><path class="x4a8ysb7l"/><path class="wkchaul0v"/><path class="dw16-vbkn"/>`,
		"fallback": "energy-icons:bench-vice-48-bold",
	});
}

export default Component;
