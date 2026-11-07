import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vb70z-b0i.css';
import '../../css/c/cby4w8_0p.css';
import '../../css/j/jydgwwbdn.css';
import '../../css/o/oio-ncbol.css';
import '../../css/e/eoajm3bvi.css';
import '../../css/h/h5xnzrb-d.css';
import '../../css/x/xrwz_e-ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="vb70z-b0i"/><path class="cby4w8_0p"/><path class="jydgwwbdn"/><path class="oio-ncbol"/><path class="eoajm3bvi"/><path class="h5xnzrb-d"/></g><path class="xrwz_e-ja"/>`,
		"fallback": "solar:cloud-sun-2-bold-duotone",
	});
}

export default Component;
