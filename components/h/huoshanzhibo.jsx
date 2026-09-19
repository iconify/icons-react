import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2112k_vg.css';
import '../../css/y/y2nmqhmom.css';
import '../../css/g/gdrmk4bfv.css';
import '../../css/s/smfv_omyd.css';
import '../../css/y/yrwibac8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2112k_vg"/><path class="y2nmqhmom"/><path class="gdrmk4bfv"/><path class="smfv_omyd"/><path class="yrwibac8x"/>`,
		"fallback": "icon-park-outline:huoshanzhibo",
	});
}

export default Component;
