import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t92-szqey.css';
import '../../css/h/h_vnigb8z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t92-szqey"/><path class="h_vnigb8z"/></g>`,
		"fallback": "streamline:hand-held-tablet-drawing",
	});
}

export default Component;
