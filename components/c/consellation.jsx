import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zpjnchhxm.css';
import '../../css/n/nffu2igiy.css';
import '../../css/k/kf_ev_6ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zpjnchhxm"/><path class="nffu2igiy"/><path class="kf_ev_6ui"/></g>`,
		"fallback": "streamline-sharp-color:consellation",
	});
}

export default Component;
