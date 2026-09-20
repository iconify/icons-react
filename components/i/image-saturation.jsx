import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t6p6qua7c.css';
import '../../css/l/l7cqq8bfr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t6p6qua7c"/><path class="l7cqq8bfr"/></g>`,
		"fallback": "streamline:image-saturation",
	});
}

export default Component;
