import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zeiam_bmz.css';
import '../../css/w/w98-k1-7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zeiam_bmz"/><path class="w98-k1-7w"/></g>`,
		"fallback": "lucide:book-down",
	});
}

export default Component;
