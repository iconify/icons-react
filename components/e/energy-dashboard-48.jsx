import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtzyn0b2b.css';
import '../../css/a/atyhtibwr.css';
import '../../css/b/bnq5ffb9n.css';
import '../../css/r/ranxahbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtzyn0b2b"/><path class="atyhtibwr"/><path class="bnq5ffb9n"/><path class="ranxahbrs"/>`,
		"fallback": "energy-icons:energy-dashboard-48",
	});
}

export default Component;
