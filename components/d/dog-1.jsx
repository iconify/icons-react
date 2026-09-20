import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vcc8kpj6u.css';
import '../../css/d/dook6pxfi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vcc8kpj6u"/><path class="dook6pxfi"/></g>`,
		"fallback": "streamline-flex:dog-1",
	});
}

export default Component;
