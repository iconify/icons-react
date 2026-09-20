import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7u5n5b_b.css';
import '../../css/f/fwo7iab4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v7u5n5b_b"/><path class="fwo7iab4c"/></g>`,
		"fallback": "tabler:brand-surfshark",
	});
}

export default Component;
