import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k59y7bb_q.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/h/h6c0vqyip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k59y7bb_q"/><path class="x9emg4bdv"/><path class="h6c0vqyip"/></g>`,
		"fallback": "keyline-icons:chart-area-two-tone",
	});
}

export default Component;
