import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jleiqw8-p.css';
import '../../css/r/ravsk9bcg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jleiqw8-p"/><path class="ravsk9bcg"/></g>`,
		"fallback": "streamline:chrome",
	});
}

export default Component;
