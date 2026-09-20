import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-byc0b3i.css';
import '../../css/v/v90gbqbox.css';
import '../../css/l/l28jqobbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-byc0b3i"/><circle class="v90gbqbox"/><path class="l28jqobbr"/></g>`,
		"fallback": "majesticons:image-circle-story-line",
	});
}

export default Component;
