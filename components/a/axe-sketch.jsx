import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cend-5brl.css';
import '../../css/x/xzsn8_b-l.css';
import '../../css/m/m-ibzdb4g.css';
import '../../css/x/x76bqtbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cend-5brl"/><path class="wm-k xzsn8_b-l"/><path class="m-ibzdb4g wm-k"/><path class="wm-a x76bqtbvi"/></g>`,
		"fallback": "withicons:axe-sketch",
	});
}

export default Component;
