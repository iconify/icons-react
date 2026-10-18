import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/w/w3ql33bwg.css';
import '../../css/w/wm3m0vl4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="w3ql33bwg"/><path class="wm3m0vl4d"/>`,
		"fallback": "energy-icons:contract-for-difference-48",
	});
}

export default Component;
