import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwvjf218n.css';
import '../../css/j/j6kt9wb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwvjf218n"/><path class="j6kt9wb5p"/></g>`,
		"fallback": "ci:cookie",
	});
}

export default Component;
