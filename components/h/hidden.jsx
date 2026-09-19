import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qfamx3byj.css';
import '../../css/b/bvqtxjp8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qfamx3byj"/><path class="bvqtxjp8b"/></g>`,
		"fallback": "codex:hidden",
	});
}

export default Component;
