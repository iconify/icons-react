import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k8xn_bcuz.css';
import '../../css/n/nu2pirbbg.css';
import '../../css/a/aftx_wyen.css';
import '../../css/q/qenlepbjq.css';
import '../../css/r/rd-9vfbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k8xn_bcuz"/><path class="nu2pirbbg wm-a"/><path class="aftx_wyen wm-k"/><path class="qenlepbjq wm-a"/><path class="rd-9vfbdz wm-s"/></g>`,
		"fallback": "withicons:bell-dot-sketch",
	});
}

export default Component;
