import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zf3petj-g.css';
import '../../css/e/eg1tj-bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zf3petj-g"/><path class="eg1tj-bbg"/></g>`,
		"fallback": "keyline-icons:bed-fill",
	});
}

export default Component;
