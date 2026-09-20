import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l57b98btq.css';
import '../../css/a/axwg7nb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l57b98btq"/><path class="axwg7nb4j"/></g>`,
		"fallback": "tabler:email-stamp",
	});
}

export default Component;
