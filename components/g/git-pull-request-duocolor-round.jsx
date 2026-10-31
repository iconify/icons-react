import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g94x-wfvp.css';
import '../../css/c/ckjxvubgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g94x-wfvp"/><path class="ckjxvubgq"/></g>`,
		"fallback": "coolicons:git-pull-request-duocolor-round",
	});
}

export default Component;
