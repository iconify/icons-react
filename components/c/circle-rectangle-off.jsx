import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3z8os9mj.css';
import '../../css/z/z5818pb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f3z8os9mj"/><path class="z5818pb7b"/></g>`,
		"fallback": "tabler:circle-rectangle-off",
	});
}

export default Component;
