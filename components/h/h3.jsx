import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5ygchbhs.css';
import '../../css/l/lbb_mrgoh.css';
import '../../css/k/keahgvigr.css';
import '../../css/i/i0g253bay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m5ygchbhs"/><path class="lbb_mrgoh"/><path class="keahgvigr"/><path class="i0g253bay"/></g>`,
		"fallback": "icon-park:h3",
	});
}

export default Component;
