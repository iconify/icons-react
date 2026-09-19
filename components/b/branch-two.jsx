import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iu3dlo15a.css';
import '../../css/a/au2_p3dfi.css';
import '../../css/e/e1vx56_3m.css';
import '../../css/h/h9jsu-72m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="iu3dlo15a"/><path clip-rule="evenodd" class="au2_p3dfi"/><path clip-rule="evenodd" class="e1vx56_3m"/><path class="h9jsu-72m"/></g>`,
		"fallback": "icon-park:branch-two",
	});
}

export default Component;
