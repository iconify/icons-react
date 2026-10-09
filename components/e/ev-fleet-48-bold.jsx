import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liisccame.css';
import '../../css/h/h6e7wy_ms.css';
import '../../css/a/a24rft0do.css';
import '../../css/n/nnwy57bcc.css';
import '../../css/y/yqhmzccbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liisccame"/><path class="h6e7wy_ms"/><path class="a24rft0do"/><path class="nnwy57bcc"/><path class="yqhmzccbj"/>`,
		"fallback": "energy-icons:ev-fleet-48-bold",
	});
}

export default Component;
