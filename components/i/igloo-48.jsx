import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd85o-qpc.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/b/bn5sk2bex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd85o-qpc"/><path class="l4lrodbjn"/><path class="bn5sk2bex"/>`,
		"fallback": "energy-icons:igloo-48",
	});
}

export default Component;
