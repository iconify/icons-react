import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k7mtvvbcv.css';
import '../../css/i/ia8dsjebn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k7mtvvbcv"/><rect class="ia8dsjebn"/></g>`,
		"fallback": "lucide:battery-medium",
	});
}

export default Component;
