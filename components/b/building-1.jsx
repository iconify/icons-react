import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u201ssybh.css';
import '../../css/x/xemrb8bnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u201ssybh"/><path class="xemrb8bnm"/></g>`,
		"fallback": "streamline-flex:building-1",
	});
}

export default Component;
