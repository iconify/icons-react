import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w2_6mev2t.css';
import '../../css/x/xeuxdm6-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w2_6mev2t"/><path class="xeuxdm6-b"/></g>`,
		"fallback": "streamline-flex:alien",
	});
}

export default Component;
