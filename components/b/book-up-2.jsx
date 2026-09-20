import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h787ojwew.css';
import '../../css/f/f4i11ifqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h787ojwew"/><path class="f4i11ifqk"/></g>`,
		"fallback": "lucide:book-up-2",
	});
}

export default Component;
