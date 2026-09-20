import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djyajbbbq.css';
import '../../css/t/thkt3tbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="djyajbbbq"/><path class="thkt3tbjv"/></g>`,
		"fallback": "lucide:cctv-off",
	});
}

export default Component;
