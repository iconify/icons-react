import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kfasygb_e.css';
import '../../css/t/tz1-4meje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kfasygb_e"/><path class="tz1-4meje"/></g>`,
		"fallback": "coolicons:android-duocolor-round",
	});
}

export default Component;
