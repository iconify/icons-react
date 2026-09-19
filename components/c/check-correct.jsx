import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mc23xac6v.css';
import '../../css/s/scn74gbpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mc23xac6v"/><path class="scn74gbpo"/></g>`,
		"fallback": "icon-park:check-correct",
	});
}

export default Component;
