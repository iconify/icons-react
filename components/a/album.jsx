import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3-tibcr.css';
import '../../css/v/v90gbqbox.css';
import '../../css/p/p-iunebqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ro3-tibcr"/><circle class="v90gbqbox"/><path class="p-iunebqq"/></g>`,
		"fallback": "meteor-icons:album",
	});
}

export default Component;
