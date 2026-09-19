import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/ho2pnibko.css';
import '../../css/a/apvo4cjdv.css';
import '../../css/e/efs1pmwgc.css';
import '../../css/t/t0-jhwb6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ho2pnibko"/><path class="apvo4cjdv"/><rect class="efs1pmwgc"/><circle class="t0-jhwb6f"/></g>`,
		"fallback": "icon-park-solid:baseball-cap",
	});
}

export default Component;
