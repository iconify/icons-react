import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fx610dbwq.css';
import '../../css/k/k32k4bbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fx610dbwq"/><path class="k32k4bbrk"/></g>`,
		"fallback": "lucide:book-copy",
	});
}

export default Component;
