import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t15_zcf9t.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/b/bk0wocfbv.css';
import '../../css/i/i72uxj_3q.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t15_zcf9t"/><path class="rgpfwjbgz"/><path class="bk0wocfbv"/><path class="i72uxj_3q"/><path class="p8o016kgn"/></g>`,
		"fallback": "icon-park:error-computer",
	});
}

export default Component;
