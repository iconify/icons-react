import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dhidlu9he.css';
import '../../css/w/wflpuhb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dhidlu9he"/><circle class="wflpuhb6k"/></g>`,
		"fallback": "lucide:case-sensitive",
	});
}

export default Component;
