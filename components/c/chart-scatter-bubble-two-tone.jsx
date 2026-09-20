import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5btkbb_w.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/t/tuoen37fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5btkbb_w"/><path class="x9emg4bdv"/><path class="tuoen37fg"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-two-tone",
	});
}

export default Component;
