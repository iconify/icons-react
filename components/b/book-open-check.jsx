import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe5frxbku.css';
import '../../css/s/sqpkv2udw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qe5frxbku"/><path class="sqpkv2udw"/></g>`,
		"fallback": "lucide:book-open-check",
	});
}

export default Component;
