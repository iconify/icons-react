import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tdg802bof.css';
import '../../css/y/ykh49b9ke.css';
import '../../css/t/tk0lgzf0i.css';
import '../../css/r/r6h4jfbmd.css';
import '../../css/n/nvxnz7uds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tdg802bof"/><path class="wm-k ykh49b9ke"/><path class="tk0lgzf0i wm-a"/><path class="r6h4jfbmd wm-k"/><path class="nvxnz7uds wm-a"/></g>`,
		"fallback": "withicons:chart-pie-sketch",
	});
}

export default Component;
