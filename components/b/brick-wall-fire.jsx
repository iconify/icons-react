import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/juhiwzb6y.css';
import '../../css/e/efqpt7b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="juhiwzb6y"/><path class="efqpt7b2h"/></g>`,
		"fallback": "lucide:brick-wall-fire",
	});
}

export default Component;
