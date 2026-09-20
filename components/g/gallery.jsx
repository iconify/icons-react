import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ijhnr3beh.css';
import '../../css/y/y4av5nb-d.css';
import '../../css/l/l5jypmbdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ijhnr3beh"/><path class="y4av5nb-d"/><path class="l5jypmbdf"/></g>`,
		"fallback": "streamline-flex:gallery",
	});
}

export default Component;
