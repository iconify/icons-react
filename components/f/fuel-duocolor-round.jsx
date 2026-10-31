import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owzc3mqvp.css';
import '../../css/v/vlma91bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="owzc3mqvp"/><path class="vlma91bmo"/></g>`,
		"fallback": "coolicons:fuel-duocolor-round",
	});
}

export default Component;
