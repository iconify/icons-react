import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmii9b0s.css';
import '../../css/d/d1uvu5qok.css';
import '../../css/p/p7ykb5bhn.css';
import '../../css/h/h7u592kmh.css';
import '../../css/i/imgtsabmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmii9b0s"/><path class="d1uvu5qok"/><path class="p7ykb5bhn"/><path class="h7u592kmh"/><path class="imgtsabmm"/>`,
		"fallback": "energy-icons:gas-cylinders-48-bold",
	});
}

export default Component;
