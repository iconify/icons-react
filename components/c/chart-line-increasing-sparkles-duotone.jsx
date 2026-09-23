import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/r/rx04-y40b.css';
import '../../css/c/c-k6sbc6l.css';
import '../../css/u/u5duy_b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="rx04-y40b"/><path class="c-k6sbc6l"/><path class="u5duy_b3g"/></g>`,
		"fallback": "keyline-icons:chart-line-increasing-sparkles-duotone",
	});
}

export default Component;
