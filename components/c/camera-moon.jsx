import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de85zrb5x.css';
import '../../css/z/zrqpb1bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="de85zrb5x"/><path class="zrqpb1bip"/></g>`,
		"fallback": "tabler:camera-moon",
	});
}

export default Component;
