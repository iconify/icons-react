import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4vs9rbaq.css';
import '../../css/i/i9auyexvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c4vs9rbaq"/><path class="i9auyexvw"/></g>`,
		"fallback": "tabler:cash-banknote-edit",
	});
}

export default Component;
