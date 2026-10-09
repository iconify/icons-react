import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2xmtbjn.css';
import '../../css/l/lajtdm1vq.css';
import '../../css/l/l0epb3h2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2xmtbjn"/><path class="lajtdm1vq"/><path class="l0epb3h2m"/>`,
		"fallback": "energy-icons:arrow-down-square-48",
	});
}

export default Component;
