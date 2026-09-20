import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qua5utqei.css';
import '../../css/d/ds0ez9bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qua5utqei"/><path class="ds0ez9bor"/></g>`,
		"fallback": "lucide-lab:candle-holder",
	});
}

export default Component;
