import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ubewop_6h.css';
import '../../css/q/qd654zb1j.css';
import '../../css/s/sc95x2bmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="ubewop_6h"/><path class="qd654zb1j"/><path class="sc95x2bmc"/></g>`,
		"fallback": "icon-park:buy",
	});
}

export default Component;
