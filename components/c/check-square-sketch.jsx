import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pyd0g_0fv.css';
import '../../css/h/h_nrohbcx.css';
import '../../css/r/r7y8ybcsu.css';
import '../../css/v/v6xt2brxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pyd0g_0fv"/><path class="h_nrohbcx wm-a"/><path class="r7y8ybcsu wm-k"/><path class="v6xt2brxo wm-a"/></g>`,
		"fallback": "withicons:check-square-sketch",
	});
}

export default Component;
