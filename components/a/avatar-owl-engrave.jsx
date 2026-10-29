import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0whgccsu.css';
import '../../css/o/oa36macpv.css';
import '../../css/p/p2a6veb4f.css';
import '../../css/r/rf4h7ccos.css';
import '../../css/b/bjy30yb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k0whgccsu wm-k"/><path class="oa36macpv wm-a"/><path class="p2a6veb4f wm-shadow"/><path class="rf4h7ccos wm-k"/><path class="bjy30yb1k wm-a"/></g>`,
		"fallback": "withicons:avatar-owl-engrave",
	});
}

export default Component;
