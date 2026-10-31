import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wpv1wrben.css';
import '../../css/u/u2858acpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wpv1wrben"/><path class="u2858acpy"/></g>`,
		"fallback": "coolicons:history-duocolor-round",
	});
}

export default Component;
