import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zeiam_bmz.css';
import '../../css/p/pqgpp3b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zeiam_bmz"/><path class="pqgpp3b5l"/></g>`,
		"fallback": "lucide:book-up",
	});
}

export default Component;
