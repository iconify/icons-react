import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mbiljzlix.css';
import '../../css/o/o2nmueu5h.css';
import '../../css/p/pswfvabxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mbiljzlix"/><path class="o2nmueu5h"/><path class="pswfvabxt"/></g>`,
		"fallback": "icon-park-outline:booster-car-seat",
	});
}

export default Component;
