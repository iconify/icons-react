import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xjo_ygssv.css';
import '../../css/y/yxfrlacge.css';
import '../../css/p/pccmthnzk.css';
import '../../css/r/ri1d2xbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xjo_ygssv"/><path class="wm-a yxfrlacge"/><path class="pccmthnzk wm-k"/><path class="ri1d2xbar wm-a"/></g>`,
		"fallback": "withicons:diya-sketch",
	});
}

export default Component;
