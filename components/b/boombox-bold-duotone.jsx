import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dciv8jbgc.css';
import '../../css/p/pnxq9t99l.css';
import '../../css/a/axxxxzb-y.css';
import '../../css/k/kk1pqcckm.css';
import '../../css/w/w3orgp4gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dciv8jbgc"/><path class="pnxq9t99l"/><path class="axxxxzb-y"/><path class="kk1pqcckm"/><path class="w3orgp4gc"/>`,
		"fallback": "solar:boombox-bold-duotone",
	});
}

export default Component;
