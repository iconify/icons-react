import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kr3a6gu1v.css';
import '../../css/l/l2mnc5w_w.css';
import '../../css/z/zrqu0o63l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="kr3a6gu1v"/><path class="l2mnc5w_w"/><path class="zrqu0o63l"/></g>`,
		"fallback": "icon-park-outline:compression",
	});
}

export default Component;
