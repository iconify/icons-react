import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i53j-vblo.css';
import '../../css/n/nij4fkuoc.css';
import '../../css/t/tcx9a37pv.css';
import '../../css/k/ko9c-gbhs.css';
import '../../css/r/rakss8bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i53j-vblo wm-k"/><path class="nij4fkuoc wm-a"/><path class="tcx9a37pv wm-shadow"/><path class="ko9c-gbhs wm-k"/><path class="rakss8bxv wm-a"/></g>`,
		"fallback": "withicons:corner-up-right-engrave",
	});
}

export default Component;
