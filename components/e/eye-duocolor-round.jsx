import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu2qvtbww.css';
import '../../css/i/i7-vc1bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eu2qvtbww"/><path class="i7-vc1bal"/></g>`,
		"fallback": "coolicons:eye-duocolor-round",
	});
}

export default Component;
