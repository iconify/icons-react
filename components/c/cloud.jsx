import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mqe76zbht.css';
import '../../css/c/c7kmlo5of.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mqe76zbht"/><path class="c7kmlo5of"/></g>`,
		"fallback": "streamline-flex:cloud",
	});
}

export default Component;
