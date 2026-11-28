import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w_tun2bbh.css';
import '../../css/h/hsf5lcb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w_tun2bbh"/><path class="hsf5lcb7r"/></g>`,
		"fallback": "lucide:balcony",
	});
}

export default Component;
