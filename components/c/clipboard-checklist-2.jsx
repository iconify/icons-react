import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dwsu5gt_l.css';
import '../../css/x/x2z1csm5v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dwsu5gt_l"/><path class="x2z1csm5v"/></g>`,
		"fallback": "marketeq:clipboard-checklist-2",
	});
}

export default Component;
