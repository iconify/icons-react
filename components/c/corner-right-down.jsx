import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvbw-qpkp.css';
import '../../css/q/qmncala0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rvbw-qpkp"/><path class="qmncala0e"/></g>`,
		"fallback": "lucide:corner-right-down",
	});
}

export default Component;
