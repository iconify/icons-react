import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/srxox7kbi.css';
import '../../css/o/oar_8075t.css';
import '../../css/q/qh9s-mbad.css';
import '../../css/r/rd4v8e0dx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="srxox7kbi"/><path class="oar_8075t"/><path class="qh9s-mbad"/><path class="rd4v8e0dx"/></g>`,
		"fallback": "icon-park:error-prompt",
	});
}

export default Component;
