import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvcq89ble.css';
import '../../css/n/nrpvuib6n.css';
import '../../css/k/k9tu7_cyc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvcq89ble"><path class="nrpvuib6n"/><path class="k9tu7_cyc"/></g>`,
		"fallback": "catppuccin:eslint-ignore",
	});
}

export default Component;
