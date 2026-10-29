import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t95jodbbz.css';
import '../../css/i/i_s471zxc.css';
import '../../css/o/of-bm4x6d.css';
import '../../css/h/hz8sthhkd.css';
import '../../css/t/tl04nibly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t95jodbbz"/><path class="i_s471zxc wm-k"/><path class="of-bm4x6d wm-a"/><path class="hz8sthhkd wm-k"/><path class="tl04nibly wm-a"/></g>`,
		"fallback": "withicons:home-sketch",
	});
}

export default Component;
