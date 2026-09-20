import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lttnvhoqk.css';
import '../../css/h/hqbytbc6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lttnvhoqk"/><path class="hqbytbc6k"/></g>`,
		"fallback": "majesticons:creditcard-hand-line",
	});
}

export default Component;
