import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zpe0_hbxc.css';
import '../../css/q/qt61kibtl.css';
import '../../css/z/zj_e5pb4e.css';
import '../../css/q/q8245zb2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zpe0_hbxc"/><path class="qt61kibtl"/><path class="zj_e5pb4e"/><path class="q8245zb2p"/></g>`,
		"fallback": "icon-park:change",
	});
}

export default Component;
