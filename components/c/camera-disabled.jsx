import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kdxtlebfo.css';
import '../../css/r/ry6hptbsb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kdxtlebfo"/><path class="ry6hptbsb"/></g>`,
		"fallback": "streamline:camera-disabled",
	});
}

export default Component;
