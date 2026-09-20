import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgyuk90eh.css';
import '../../css/b/bpl4tpbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wgyuk90eh"/><path class="bpl4tpbbv"/></g>`,
		"fallback": "tabler:chess-queen",
	});
}

export default Component;
