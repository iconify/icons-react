import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qgwydobiv.css';
import '../../css/k/k3dhtc42a.css';
import '../../css/p/pebjutbqq.css';
import '../../css/e/eyseibbic.css';
import '../../css/n/nkk_t6bky.css';
import '../../css/f/fdu3xhciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qgwydobiv wm-k"/><path class="k3dhtc42a wm-k"/><path class="pebjutbqq wm-a"/><path class="eyseibbic wm-a"/><path class="nkk_t6bky"/><path class="fdu3xhciy"/></g>`,
		"fallback": "withicons:cat-sketch",
	});
}

export default Component;
