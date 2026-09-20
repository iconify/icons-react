import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t974nl0rm.css';
import '../../css/g/gcbfbxblu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t974nl0rm"/><path class="gcbfbxblu"/></g>`,
		"fallback": "streamline:dangerous-zone-sign",
	});
}

export default Component;
