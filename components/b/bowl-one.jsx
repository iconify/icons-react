import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p6x4uactl.css';
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
		"content": `<g class="vm3ivccum"><path class="p6x4uactl"/><path class="ygihsgtev"/><path class="xzm23acqn"/></g>`,
		"fallback": "icon-park-outline:bowl-one",
	});
}

export default Component;
