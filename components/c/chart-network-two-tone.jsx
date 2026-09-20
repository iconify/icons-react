import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/luygz3g7s.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/z/z_xkh2b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="luygz3g7s"/><path class="x9emg4bdv"/><path class="z_xkh2b7b"/></g>`,
		"fallback": "keyline-icons:chart-network-two-tone",
	});
}

export default Component;
