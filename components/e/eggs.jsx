import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iox4etb0b.css';
import '../../css/l/l7uu1bcrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iox4etb0b"/><path class="l7uu1bcrd"/></g>`,
		"fallback": "tabler:eggs",
	});
}

export default Component;
