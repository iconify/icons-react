import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofpokoiuq.css';
import '../../css/j/jp7xb6-ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ofpokoiuq"/><path class="jp7xb6-ci"/></g>`,
		"fallback": "coolicons:eagle-duocolor-round",
	});
}

export default Component;
