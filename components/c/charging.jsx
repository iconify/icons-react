import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hkx7lc1je.css';
import '../../css/x/xf7a9pb-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hkx7lc1je"/><path class="xf7a9pb-s"/></g>`,
		"fallback": "streamline-flex:charging",
	});
}

export default Component;
