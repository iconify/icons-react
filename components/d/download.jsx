import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb74qu_lk.css';
import '../../css/i/i39lovd2f.css';
import '../../css/e/ev2_qyd-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eb74qu_lk"/><path class="i39lovd2f"/><path class="ev2_qyd-t"/></g>`,
		"fallback": "icon-park:download",
	});
}

export default Component;
