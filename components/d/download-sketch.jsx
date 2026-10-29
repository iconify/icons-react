import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vcdd_bbfn.css';
import '../../css/v/v9qxvm3bb.css';
import '../../css/l/llxf78_xq.css';
import '../../css/v/v4b31vb2z.css';
import '../../css/l/ld-3ebcbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vcdd_bbfn"/><path class="v9qxvm3bb wm-k"/><path class="llxf78_xq wm-a"/><path class="v4b31vb2z wm-k"/><path class="ld-3ebcbh wm-a"/></g>`,
		"fallback": "withicons:download-sketch",
	});
}

export default Component;
