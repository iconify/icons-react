import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dxz2t-ggx.css';
import '../../css/l/lvg5i6cmk.css';
import '../../css/e/ejgseacvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dxz2t-ggx"/><path class="lvg5i6cmk"/><path class="ejgseacvx"/></g>`,
		"fallback": "icon-park:cycle-arrow",
	});
}

export default Component;
