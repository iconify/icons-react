import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/ql3kx3b1a.css';
import '../../css/t/t01jb1i7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ql3kx3b1a"/><path class="t01jb1i7d"/></g>`,
		"fallback": "coolicons:bug-duocolor-round",
	});
}

export default Component;
