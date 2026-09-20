import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yhtx0zh1i.css';
import '../../css/r/rud1q9bap.css';
import '../../css/h/h7u1xzbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yhtx0zh1i"/><path class="rud1q9bap"/><path class="h7u1xzbhq"/></g>`,
		"fallback": "lucide:can",
	});
}

export default Component;
