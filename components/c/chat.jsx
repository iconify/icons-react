import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kasx5tbbv.css';
import '../../css/b/bfir4objw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kasx5tbbv"/><path class="bfir4objw"/></g>`,
		"fallback": "struq:chat",
	});
}

export default Component;
