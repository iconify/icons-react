import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_whhbcnb.css';
import '../../css/s/sin1y-e7e.css';
import '../../css/w/wst-k125f.css';
import '../../css/p/pcq5dpbvf.css';
import '../../css/e/eff0wfl9s.css';
import '../../css/c/cphdcoi7e.css';
import '../../css/a/ahinpebky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_whhbcnb"/><path class="sin1y-e7e"/><path class="wst-k125f"/><path class="pcq5dpbvf"/><path clip-rule="evenodd" class="eff0wfl9s"/><path class="cphdcoi7e"/><path class="ahinpebky"/></g>`,
		"fallback": "icon-park:close-wifi",
	});
}

export default Component;
