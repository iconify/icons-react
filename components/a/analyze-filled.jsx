import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xonnvibpz.css';
import '../../css/f/fegxd4p-h.css';
import '../../css/v/v-asesbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xonnvibpz"/><path class="fegxd4p-h"/><path class="v-asesbpn"/></g>`,
		"fallback": "tabler:analyze-filled",
	});
}

export default Component;
