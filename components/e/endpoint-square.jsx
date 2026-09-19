import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kcwgie5sv.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/v/vjsww2xss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kcwgie5sv"/><circle class="tqb_6nb6c"/><path class="vjsww2xss"/></g>`,
		"fallback": "icon-park:endpoint-square",
	});
}

export default Component;
