import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w61x5800w.css';
import '../../css/p/pth6q-6tl.css';
import '../../css/e/eo7kmibtw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w61x5800w"/><path class="pth6q-6tl"/><path class="eo7kmibtw"/></g>`,
		"fallback": "streamline:cloud-refresh",
	});
}

export default Component;
