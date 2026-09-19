import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mckcljbji.css';
import '../../css/m/myqgw3bux.css';
import '../../css/r/rcgtaxbvi.css';
import '../../css/k/k-1utdbdp.css';
import '../../css/z/zu48h77mc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mckcljbji"/><path class="myqgw3bux"/><path class="rcgtaxbvi"/><path class="k-1utdbdp"/><path class="zu48h77mc"/></g>`,
		"fallback": "icon-park:acoustic",
	});
}

export default Component;
