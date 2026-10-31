import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlzu35bzk.css';
import '../../css/t/t54msjkmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tlzu35bzk"/><path class="t54msjkmu"/></g>`,
		"fallback": "coolicons:flask-duocolor-round",
	});
}

export default Component;
