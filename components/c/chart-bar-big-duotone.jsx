import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/l/lrcfjnbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="lrcfjnbjg"/></g>`,
		"fallback": "keyline-icons:chart-bar-big-duotone",
	});
}

export default Component;
