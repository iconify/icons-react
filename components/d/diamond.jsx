import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b0ca8mbrs.css';
import '../../css/o/ootyit3-w.css';
import '../../css/d/dl3t79q_z.css';
import '../../css/s/sob8e-jxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="b0ca8mbrs"/><path class="ootyit3-w"/><path class="dl3t79q_z"/><path class="sob8e-jxb"/></g>`,
		"fallback": "icon-park:diamond",
	});
}

export default Component;
