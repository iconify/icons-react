import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/luygz3g7s.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/z/z_xkh2b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="luygz3g7s"/><path class="p53xcyb3q"/><path class="z_xkh2b7b"/></g>`,
		"fallback": "keyline-icons:chart-network-sharp-two-tone",
	});
}

export default Component;
