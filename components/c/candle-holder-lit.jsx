import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv2k4acyc.css';
import '../../css/s/scv0kn1jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pv2k4acyc"/><path class="scv0kn1jn"/></g>`,
		"fallback": "lucide-lab:candle-holder-lit",
	});
}

export default Component;
