import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q7nk-vb-p.css';
import '../../css/a/arwhls-rp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q7nk-vb-p"/><path class="arwhls-rp"/></g>`,
		"fallback": "streamline:camera-1",
	});
}

export default Component;
