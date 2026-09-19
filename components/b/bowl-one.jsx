import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/br_-3ob_w.css';
import '../../css/y/ygihsgtev.css';
import '../../css/x/xzm23acqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="br_-3ob_w"/><path class="ygihsgtev"/><path class="xzm23acqn"/></g>`,
		"fallback": "icon-park-solid:bowl-one",
	});
}

export default Component;
