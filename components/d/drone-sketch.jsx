import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xflpdpbtd.css';
import '../../css/k/kv712mb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xflpdpbtd"/><path class="kv712mb6e wm-a"/></g>`,
		"fallback": "withicons:drone-sketch",
	});
}

export default Component;
