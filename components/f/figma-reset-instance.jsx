import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/adm6lkq3f.css';
import '../../css/b/buqrw97ea.css';
import '../../css/x/xh79rrbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="adm6lkq3f"/><path class="buqrw97ea"/><path class="xh79rrbaw"/></g>`,
		"fallback": "icon-park:figma-reset-instance",
	});
}

export default Component;
