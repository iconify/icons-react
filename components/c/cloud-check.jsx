import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dd5uyj8ot.css';
import '../../css/e/eddtmhktd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dd5uyj8ot"/><path class="eddtmhktd"/></g>`,
		"fallback": "streamline:cloud-check",
	});
}

export default Component;
