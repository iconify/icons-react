import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/k/kifrs83bv.css';
import '../../css/k/kjxsrjlhw.css';
import '../../css/a/a1hk30b6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="kifrs83bv"/><path class="kjxsrjlhw"/><path class="a1hk30b6h"/></g>`,
		"fallback": "streamline-plump-color:hospital-sign-square",
	});
}

export default Component;
