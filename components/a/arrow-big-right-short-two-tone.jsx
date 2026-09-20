import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kbc-a6ktx.css';
import '../../css/u/ua7r-degj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kbc-a6ktx"/><path class="ua7r-degj"/></g>`,
		"fallback": "keyline-icons:arrow-big-right-short-two-tone",
	});
}

export default Component;
