import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zjykyhbhu.css';
import '../../css/u/u1tl_fbmw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zjykyhbhu"/><path class="u1tl_fbmw"/></g>`,
		"fallback": "streamline-flex:arrow-roadmap",
	});
}

export default Component;
