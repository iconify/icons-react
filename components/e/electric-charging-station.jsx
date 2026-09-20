import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fd9t0p82t.css';
import '../../css/m/m7dyedc6f.css';
import '../../css/t/tlre7czjn.css';
import '../../css/t/t2ev9-fdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fd9t0p82t"/><path class="m7dyedc6f"/><path class="tlre7czjn"/><path class="t2ev9-fdo"/></g>`,
		"fallback": "streamline-plump-color:electric-charging-station",
	});
}

export default Component;
