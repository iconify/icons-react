import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-at6e2cq.css';
import '../../css/z/zf-4rt-bx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-at6e2cq"/><path class="zf-4rt-bx"/>`,
		"fallback": "energy-icons:charger-location-48",
	});
}

export default Component;
